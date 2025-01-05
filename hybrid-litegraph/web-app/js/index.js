import { Bridge } from './bridge.js';
const graph = new LGraph();
const mycanvas = document.getElementById('mycanvas');
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;
const canvas = new LGraphCanvas(mycanvas, graph);
window.canvas = canvas;
window.graph = graph;
function updateEditorHiPPICanvas() {
	canvas.resize();
	const ratio = window.devicePixelRatio;
	if (ratio == 1) { return }
	const rect = mycanvas.parentNode.getBoundingClientRect();
	const { width, height } = rect;
	mycanvas.width = width * ratio;
	mycanvas.height = height * ratio;
	mycanvas.style.width = width + "px";
	mycanvas.style.height = height + "px";
	mycanvas.getContext("2d").scale(ratio, ratio);
	return mycanvas;
}

window.addEventListener("resize", function () {
	updateEditorHiPPICanvas();
});
document.addEventListener('keydown', function (event) {
	if (event.key === 'F5' || (event.ctrlKey && event.key === 'r') || (event.ctrlKey && event.keyCode == 82)) {
		event.preventDefault();
	}
});
updateEditorHiPPICanvas();

const bridge = new Bridge();
await bridge.init();
