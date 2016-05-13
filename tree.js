var inputAngle = document.getElementById("angle");
var inputSplit = document.getElementById("split");
var inputDepth = document.getElementById("depth");
var inputSize = document.getElementById("size");

function rad(n) { return n * Math.PI / 180.0; }

function drawLine(x1, y1, x2, y2){
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

function drawTree () {
    var angle = parseInt(inputAngle.value);
    var split = parseInt(inputSplit.value);
    var depth = parseInt(inputDepth.value);
    var size = parseInt(inputSize.value);

    var x1 = canvas.width / 2;
    var y1 = 0;

    function paint (x1, y1, angle, depth) {
        if (depth != 0){
            var x2 = x1 + (Math.cos(rad(angle)) * depth * size);
            var y2 = y1 + (Math.sin(rad(angle)) * depth * size);
            drawLine(x1, y1, x2, y2, depth);
            paint(x2, y2, angle - split, depth - 1);
            paint(x2, y2, angle + split, depth - 1);
        }
    }

    paint(x1, y1, angle, depth);
}

function setRandom() {
    inputAngle.value = Math.floor((Math.random() * 180));
    inputSplit.value = Math.floor((Math.random() * 360));
    inputDepth.value = Math.floor((Math.random() * 20) + 1);
    inputSize.value = Math.floor((Math.random() * 20) + 1);

    init();
}