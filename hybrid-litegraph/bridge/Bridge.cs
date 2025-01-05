using System.Runtime.InteropServices;

namespace hybrid_litegraph.bridge
{
    [ClassInterface(ClassInterfaceType.AutoDual)]
    [ComVisible(true)]
    public class Bridges : IJSMapExecutor
    {
        readonly static Dictionary<string, object> bridges_ = new Dictionary<string, object> {
            { "lgraph_bridge",new LiteGraphBridge()}
        };

        public string JavaScriptMapObject => "bridge";
        public object get(string key)
        {
            object v = null;
            bridges_.TryGetValue(key, out v);
            return v;
        }

        private async Task registerBridge(string js, string name)
        {
            await this.Call(args: new object[] { js, name });
        }

        public async void load()
        {
            foreach (var bridge in bridges_)
            {
                await registerBridge(bridge.Key, (bridge.Value as IJSMapExecutor).JavaScriptMapObject);
            }
        }
    }
}
