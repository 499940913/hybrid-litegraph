
export default class LGraphBridge {
    createNodeType(info) {
        function node() {
            let obj = this;
            info.inputs.forEach(function (i) {
                obj.addInput(i[0],i[1]);
            });
            info.outputs.forEach(function (i) {
                obj.addOutput(i[0], i[1]);
            });
            this.enableSlotRename=false;
        }
        node.title=info.name;
        node.prototype.onExecute = function () {
            console.log("node execute");
        }
        node.prototype.toJson=function(){
            const ignore_prop=["inputs","outputs","graph"];
            var cache=[];
            var json=JSON.stringify(this,function(key, value) {
                if(ignore_prop.includes(key))
                    return;
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                         return;
                         }
                     cache.push(value); 
                    }
                     return value;
                    });
            cache=null;
            return json;
        }
        return node;
    }

    constructor() {
        this.registerNodeType = async (info) => {
            LiteGraph.registerNodeType(info.name, this.createNodeType(info));
        };
        this.changeSupportedTypes = async (types) => {
            console.log(types);
            LGraph.supported_types = types;
            window.themeSelector.apply();
        };
        this.ConnectionLoading=false;
        window.canvas.onNodeSelected=function(node){
             window.bridges.lgraph_bridge.native.onCanvasNodeSelected(node.toJson());
        };
        this.createConnectionByLoad=async(link)=>{
            this.ConnectionLoading=true;
            let srcNode=window.graph.getNodeById(link.src+1);
            let target_node=window.graph.getNodeById(link.dst+1);
            let slot=srcNode.outputs.findIndex(item=>item.name==link.outName);
            let target_slot=target_node.inputs.findIndex(item=>item.name==link.inName);
            console.log(slot,target_slot);
            srcNode.connect(slot,target_node,target_slot);
            this.ConnectionLoading=false;
        };
        this.changeTheme=async(themeId)=>{
            window.themeSelector.apply(themeId);
        }
        this.serialize=function(){
            return  (() => {
                const data=window.graph.serialize();
                console.log(JSON.stringify(data));
                return data;
                 })();
        };
        this.clear=async()=>{
            window.graph.clear();
        };
        this.NodeLoading=false;
        this.createNodeByLoad=async(n_info)=>{
            console.log(n_info);
            this.NodeLoading=true;
            var node =  window.LiteGraph.createNode(n_info.type);
            node.id = n_info.id; //id it or it will create a new id
            window.graph.add(node, true);
            node.configure(n_info);
            node.size = node.computeSize();
            if (node.onResize)
                node.onResize(node.size);
            node.resizable=false;
            this.NodeLoading=false;
            //window.graph
          //  var node = LiteGraph.createNode(n_info.type, n_info.title);
        };
        this.init = async () => {
            await this.native.init();
            window.graph.onNodeConnectionChange= function (slotType,dstNode,dst_slot,srcNode,slot) {
                if(slotType===LiteGraph.INPUT)
                {
                    //debugger;
                    console.log(dstNode,dst_slot,srcNode,slot);
                    console.log(typeof(srcNode));
                    if(typeof(srcNode) === "undefined")
                    {
                        window.bridges.lgraph_bridge.native.unSubscribe(
                            JSON.stringify({
                                dst:dstNode.uid,
                                inName:dstNode.inputs[dst_slot].name
                            })
                        );
                    }
                    else{
                        if( window.bridges.lgraph_bridge.ConnectionLoading)
                            return;
                        console.log("src",srcNode,"dst",dstNode);
                        window.bridges.lgraph_bridge.native.subscribe(
                            JSON.stringify({
                                src:srcNode.uid,
                                outName:srcNode.outputs[slot].name,
                                dst:dstNode.uid,
                                inName:dstNode.inputs[dst_slot].name
                            })
                        ).then(succeed=>{if(!succeed)
                            dstNode.disconnectInput(dst_slot);//native订阅失败，需要移除lgraph上已经链接的
                        });
                    }
                 
                }
            };
            window.graph.onNodeRemoved=function(node){
                console.log(node);
                window.bridges.lgraph_bridge.native.removeNode(node.toJson());
            };
            window.graph.onNodeAdded = function (node) {
                console.log(node);
                if( window.bridges.lgraph_bridge.NodeLoading)
                    return;
                window.bridges.lgraph_bridge.native.createNativeNode(node.toJson()).then(id => {
                    node.uid = id;
                    node.title = id + "." + node.type;
                    if (id < 0)
                        window.graph.remove(node);
                    else{
                        //resize
                        node.size = node.computeSize();
                        if (node.onResize)
                            node.onResize(node.size);
                        node.resizable=false;
                    }
                });
                
            };
        };
    }
}