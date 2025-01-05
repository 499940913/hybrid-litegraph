export class Bridge {
    constructor() {
        this.init = async () => {
            window.bridges = {};
            window.bridges.bridge = this;
            this.registerBridge = async (js, name) => {
                console.log("registerBridge",js,name);
                let module = await import("./bridges/" + js + ".js");
                const anonymous = new module.default();
                anonymous.native = await window.chrome.webview.hostObjects.bridges.get(js);
                window.bridges[js] = anonymous;
                if (window.bridges[js].init)
                    await window.bridges[js].init();
            };
            await window.chrome.webview.hostObjects.bridges.load();
        };
    }
}