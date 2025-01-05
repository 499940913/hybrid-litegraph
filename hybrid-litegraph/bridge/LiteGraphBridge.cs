using System.Runtime.InteropServices;
 
namespace hybrid_litegraph.bridge
{
    public class LiteGraphNode
    {
        [Newtonsoft.Json.JsonProperty("id")]
        public int fake_id { get; set; }
        public string title { get; set; }
        [Newtonsoft.Json.JsonProperty("type")]
        public string nodeType { get; set; }
        public decimal[] pos { get; set; }

        public int uid { get; set; }

    }


    public class LGraphLinkInfo
    {
        public int src { get; set; }
        public string outName { get; set; }
        public int dst { get; set; }
        public string inName { get; set; }
    }

    [ClassInterface(ClassInterfaceType.AutoDual)]
    [ComVisible(true)]
    public class LiteGraphBridge : IJSMapExecutor
    {
 
        public static LiteGraphBridge LGraphBridge { get; set; }

        public string JavaScriptMapObject => "lgraph_bridge";

        public async Task changeTheme(string themeId)
        {
            await this.Call(args: themeId);
        }

        public void onCanvasNodeSelected(string json)
        {
            var nodeInfo = json.fromJson<LiteGraphNode>();
            if (nodeInfo != null)
            {
                //TODO litegraph.js中选中节点触发，若需要native做出对应处理，请实现
            }
        }

        public LiteGraphBridge()
        {
            LGraphBridge = this;
        }

        public async Task clear()
        {
            await this.Call();
        }

        public async Task Load(string f)
        {
            //SelectedNode = null;
            await clear();
            //TODO 请实现自有图的方案加载
        }

        public async Task<string> createConnectionByLoad(LGraphLinkInfo linkInfo)
        {
            return await this.Call(args: linkInfo);
        }

        public async Task<string> createNodeByLoad(LiteGraphNode nodeInfo)
        {
            return await this.Call(args: nodeInfo);
        }

        /// <summary>
        /// litegraph.js创建节点后会触发该函数 请结合自有图创建native节点
        /// </summary>
        /// <param name="json"></param>
        /// <returns>native节点失败请返回-1，成功返回对应native节点ID</returns>
        public async Task<int> createNativeNode(string json)
        {
            var nodeInfo = json.fromJson<LiteGraphNode>();
            //todo 结合实际情况创建native节点
            // var node = pipeLine_.CreateNode(nodeInfo.nodeType);
            return await Task.FromResult(nodeInfo.fake_id);
        }

        /// <summary>
        /// litegraph.js中移除连线触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> unSubscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo 结合实际情况管理native节点间的订阅关系
            return true;
        }

        /// <summary>
        /// litegraph.js节点间参数订阅触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> subscribe(string json)
        {
            var link = json.fromJson<LGraphLinkInfo>();
            //todo 结合实际情况管理native节点间的订阅关系
            return true;
        }

        public async Task<bool> Save(string path)
        {
            //方案保存，结合实际情况实现
            return true;
        }

        public async Task<string> serialize()
        {
            return await this.Call();
            // return await Task.FromResult(pipeLine_.Subscribe(link.src, link.outName, link.dst, link.inName));
        }

        /// <summary>
        /// 向litegraph.js注册支持的io类型
        /// </summary>
        /// <returns></returns>
        public async Task changeSupportedTypes()
        {
            //请按实际支持类型注册，
            await this.Call(args: new object[] { new string[] { "int", "string", "float" } });
        }

        /// <summary>
        /// 向litegraph.js注册节点
        /// </summary>
        /// <param name="nodeInfo"></param>
        /// <returns></returns>
        private async Task registerNodeType(object nodeInfo)
        {
            await this.Call(args: new object[] { nodeInfo });
        }

        /// <summary>
        /// litegraph.js移除节点时触发
        /// </summary>
        /// <param name="json"></param>
        /// <returns></returns>
        public async Task<bool> removeNode(string json)
        {
            var node = json.fromJson<LiteGraphNode>();
            //根据实际情况移除native节点
            return true;
        }

        /// <summary>
        /// 向litegraph.js注册节点
        /// </summary>
        /// <returns></returns>
        private async Task loadNodeTypes()
        {
            //请根据自有图节点进行相关注册
            var nodeInfo = new
            {
                inputs = new object[] {
                    new string[] { "input0", "string" }, new string[] { "input1", "int" },new string[] { "input2", "float" } },
            
                outputs = new object[] {
                    new string[] { "output0", "string" }, new string[] { "output1", "int" },new string[] { "output2", "float" } },
                name = "test.testjob"
            };
            await registerNodeType(nodeInfo);
        }

        public async void init()
        {
            await changeSupportedTypes();
            await loadNodeTypes();
        }

    }
}
