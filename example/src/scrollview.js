const { DuitView, SingleChildScrollView, Text, Column } = require("duit_js");

function scrollviewExample() {
    const builder = DuitView.builder();

    // const root = builder.createRootOfExactType(DuitElementType.expanded, {});

    // root.addChild(
        
    // )

    builder.rootFrom(SingleChildScrollView({
        attributes: {
            physics: "neverScrollableScrollPhysics"
        }
    }).addChild(
        Column({}).addChildren(
            [
                Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "+100500"}}),
            Text({attributes: {data: "The end!"}}),
            ]
        )
    ))

    return builder.build();
}

module.exports = scrollviewExample