let pollCount = 0;
const pollForWebview = async () => {
    const contexts = await browser.getContexts();
    const webContext = contexts.find(context => context.startsWith('WEBVIEW'));
    if(webContext) return webContext;
    if(pollCount < 3) {
        pollCount++;
        return browser.pause(1000).then(pollForWebview);
    }
}

describe('app:', () => {
    it('loads', async () => {
        console.log('hello!');
        const webContext = await pollForWebview();
        await browser.switchContext(webContext);
        const context = await browser.getContext();
        console.log(context);
        (await $('input')).setValue('I am a banana');
        await browser.url(`https://example.com/`);
        browser.pause(10000);
    });
});