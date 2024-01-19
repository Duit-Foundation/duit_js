const { DuitView, DuitElementType, ImageUiElement, EmptyUiElement, TextUiElement, CustomTreeElement } = require("duit_js");
const { readFileSync } = require("fs");

class ExampleCustomWidget extends CustomTreeElement {

    constructor(attrs, tag, id, action, controlled) {
       super(attrs, tag, id, action, controlled);
    }
 }

function imgViewExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {

    });

    const img = readFileSync('assets/vlad_ten.png')



    root.addChildren([
        new TextUiElement({
            data: "Network image"
        }),
        new ImageUiElement({
            type: "network",
            src: "https://via.assets.so/game.png?id=1&q=95&w=360&h=360&fit=fill",
            width: 100,
            height: 100
        }),
        new TextUiElement({
            data: "Asset image"
        }),
        new ImageUiElement({
            type: "asset",
            src: "assets/betboom.jpg",
            width: 100,
            height: 100
        }),
        new TextUiElement({
            data: "Memory image (from bytes)"
        }),
        new ImageUiElement({
            type: "memory",
            src: "",
            byteData: img,
            width: 100,
            height: 100
        }),
        new EmptyUiElement(),
        new ExampleCustomWidget({"random": "SPECIAL TEXT IN CUSTOM WIDGET"}, "ExampleCustomWidget")
    ])

    return builder.build();
}

module.exports = imgViewExample