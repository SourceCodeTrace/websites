# TypeChat源码分析：基于大语言模型的定制化 AI Agent 交互规范
![typechat.png](/images/typechat.png)

本文深入介绍了微软最近发布的 TypeChat 项目，该项目允许开发者定义大语言模型返回的响应结构。通过分析源代码，探讨了 Prompt 的基本概念，为定制化开发互动式 AI Agent 提供便捷的解决方案。
文章着重介绍 TypeChat 的关键要素，例如集成不同的大语言模型、提高灵活性，并调整输出以适应特定场景，这对于在游戏中通过 AI Agent 实现多样交互至关重要。

在 TypeChat 中，先定义好 ChatGPT 的响应类型，即 Schema, 创建将自然语言请求翻译为特定类型的 JSON 对象的工具函数， 将函数列表和问题发送给GPT，
GPT根据函数定义，返回要执行的函数名和参数， 不同于 **Function calling**， 它使用 **Typescript** 类型来作为 **Schema**，要求 ChatGPT 返回符合这个类型定义的数据。

因为最近开发一个基于GPT的AI AGENT的游戏，不同的人在地图通过不断的和chatGPT定义角色的NPC聊天交互，然后从NPC那里得到不同的反馈，得到不一样的体验，对于交互的部分，我觉得 tyeChat 就可以很好的交互上的格式问题。

本文对typeChat 其中比较重要的点进行分析： 
1. **大模型对接**的地方：目前只是支持了两种大模型，微软自己的Azure的和 OpenAI 的，比如还有很多的大模型如何接入的问题
2. 灵活性的**拓展**：比如说目前 typeChat 对于类型的定义过于严格，可能要耗费大量的token 以及对于不需要那么严格的场景，比如聊天，只需要有几个关键的key是对的就可以了如何优化

>基于 [SourceCodeTrace](https://source.toscl.com/zh-hans/) 项目推崇的原则，本文代码块引用均有来源，SourceCodeTrace Project 帮助您在博客、文章记录的过程中，引入对应项目以及版本，行号等信息，让后续的读者，通过引用来源，能够进行更加深入的学习，在博客或文章中引入代码块时，尽量提供代码的来源信息。

## 核心架构
核心就是对话，校验，修复型对话，得到想要的结构。

```ts {65-76} {65} (https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L65-L76)
export function createJsonTranslator<T extends object>(model: TypeChatLanguageModel, schema: string, typeName: string): TypeChatJsonTranslator<T> {
    const validator = createJsonValidator<T>(schema, typeName);
    const typeChat: TypeChatJsonTranslator<T> = {
        model,
        validator,
        attemptRepair: true,
        stripNulls: false,
        createRequestPrompt,
        createRepairPrompt,
        translate
    };
    return typeChat;
```
[/src/typechat.ts?#L65-L76](https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L65-L76)

**createJsonTranslator** 函数是核心部分，它接受三个参数 model、schema 和 typeName，并返回一个包含几个方法和属性的对象 typeChat，
该对象用于将自然语言请求转换为指定类型的 JSON 对象。

- model：是用于将自然语言请求翻译为 JSON 的大语言模型，目前是支持微软自己的Azure 和 Openai的
- schema：是一个包含 JSON schema 的 TypeScript 源代码的字符串。
- typeName：是在 schema 中指定的目标 JSON 类型的名称。

返回的 typeChat 对象包含以下几个属性和方法：

- model：保存传入的语言模型。
- validator：通过调用 createJsonValidator 函数，使用传入的 schema 和 typeName 创建一个 JSON 校验器，并将其保存在 validator 属性中。
- attemptRepair：一个布尔值，表示在校验失败时是否尝试修复 JSON 对象。
- stripNulls：一个布尔值，表示是否从最终的 JSON 对象中剥离空值（null）属性。
- createRequestPrompt(request)：一个函数，用于创建用户请求的 Prompt ，包含 JSON schema 和用户请求的内容。
- createRepairPrompt(validationError)：一个函数，检验格式不对的话，修复性的 Prompt ，再次请求。
- translate(request)：一个异步函数，用于将用户请求翻译为 JSON 对象。 
它使用语言模型 model 来翻译用户请求，并调用 JSON 校验器进行验证。如果验证成功，返回验证结果，否则根据 attemptRepair 的值决定是否尝试修复错误，最终返回修复后的 JSON 对象。

## Prompt 的核心
```ts {78-84} {78} (https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L78-L84)
    function createRequestPrompt(request: string) {
        return `You are a service that translates user requests into JSON objects of type "${validator.typeName}" according to the following TypeScript definitions:\n` +
            `\`\`\`\n${validator.schema}\`\`\`\n` +
            `The following is a user request:\n` +
            `"""\n${request}\n"""\n` +
            `The following is the user request translated into a JSON object with 2 spaces of indentation and no properties with the value undefined:\n`;
    }
```
[/src/typechat.ts?#L78-L84](https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L78-L84)

这里面的核心就是对 ChatGpt 做一个角色的定义， 定义 ChatGpt 作为一个处理JSON对象的服务，在一个就是 typescript 对对象类型的定义描述给 chatGpt 识别。

当 ChatGpt 回复之后，通过 validation 校验的类型错误，在给 chatGpt 说你的类型不对，具体错误是什么， 你需要在输出修改后的JSON对象：
```ts {85-90} {85} (https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L85-L90)

    function createRepairPrompt(validationError: string) {
        return `The JSON object is invalid for the following reason:\n` +
            `"""\n${validationError}\n"""\n` +
            `The following is a revised JSON object:\n`;
    }
```
[/src/typechat.ts?#L85-L90](https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/typechat.ts?#L85-L90)

通过这样的一次反馈得到最后需要的格式， 但是这个里面如果需要足够的稳定，还需要自行修改源码添加次数，以便达到自己的预期。

## 增加大模型接口
目前官网里面就支持了两种，微软自己的Azure的和 OpenAI 的ChatGpt，为了探索 TypeChat 核心概念与拓展性，为游戏开发定制 AI Agent 提供便利，还是需要处理这块代码实现不同大模型的对接需求： 
```ts {41-55} {41} (https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/model.ts?#L41-L55)
export function createLanguageModel(env: Record<string, string | undefined>): TypeChatLanguageModel {
    if (env.OPENAI_API_KEY) {
        const apiKey = env.OPENAI_API_KEY ?? missingEnvironmentVariable("OPENAI_API_KEY");
        const model = env.OPENAI_MODEL ?? missingEnvironmentVariable("OPENAI_MODEL");
        const endPoint = env.OPENAI_ENDPOINT ?? "https://api.openai.com/v1/chat/completions";
        const org = env.OPENAI_ORGANIZATION ?? "";
        return createOpenAILanguageModel(apiKey, model, endPoint, org);
    }
    if (env.AZURE_OPENAI_API_KEY) {
        const apiKey = env.AZURE_OPENAI_API_KEY ?? missingEnvironmentVariable("AZURE_OPENAI_API_KEY");
        const endPoint = env.AZURE_OPENAI_ENDPOINT ?? missingEnvironmentVariable("AZURE_OPENAI_ENDPOINT");
        return createAzureOpenAILanguageModel(apiKey, endPoint);
    }
    missingEnvironmentVariable("OPENAI_API_KEY or AZURE_OPENAI_API_KEY");
}
```
[/src/model.ts?#L41-L55](https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/model.ts?#L41-L55)

这里是两个模型公用的部分，基本的请求结构差不多，定义 Prompt 和 role， 然后得到 `result.data.choices[0].message?.content` 返回值。
这里可以修改返回的内容，以及在这里定义每次调用请求的大模型接口，可以通过这个地方，修改为自己定义的接口以及处理自己代码的逻辑。

```ts {89-116} {89} (https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/model.ts?#L89-L116)
function createAxiosLanguageModel(url: string, config: object, defaultParams: Record<string, string>) {
    const client = axios.create(config);
    const model: TypeChatLanguageModel = {
        complete
    };
    return model;

    async function complete(prompt: string) {
        let retryCount = 0;
        const retryMaxAttempts = model.retryMaxAttempts ?? 3;
        const retryPauseMs = model.retryPauseMs ?? 1000;
        while (true) {
            const params = {
                ...defaultParams,
                messages: [{ role: "user", content: prompt }],
                temperature: 0,
                n: 1
            };
            const result = await client.post(url, params, { validateStatus: status => true });
            if (result.status === 200) {
                return success(result.data.choices[0].message?.content ?? "");
            }
            if (!isTransientHttpError(result.status) || retryCount >= retryMaxAttempts) {
                return error(`REST API error ${result.status}: ${result.statusText}`);
            }
            await sleep(retryPauseMs);
            retryCount++;
        }
```
[/src/model.ts?#L89-L116](https://github.com/microsoft/TypeChat/blob/e300dccd2fbf846518dba7fe94a36a30168885ec//src/model.ts?#L89-L116)


本文也在持续的更新中，如果你需要得到最新的更新，请访问: [TypeChat源码分析：基于大语言模型的定制化 AI Agent 交互规范](https://www.toscl.com/ai_agent_typechat/)