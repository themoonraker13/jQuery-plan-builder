$("#canvas").resizable();

$('.paletteComponent').click(function () {
    $(this).clone()
        .prependTo('#canvas')
        .draggable({containment: "#canvas"})
        .resizable({aspectRatio: true, containment: "#canvas", handles: 'ne, se, sw, nw'})
        .rotatable({containment: "#canvas"})
        .css({"position": "absolute", "top": "10", "left": "10"});
});