const { DuitView, SizedBox, DecoratedBox, Padding, Row, Image, Column, Text, Ref, SemanticBlock, SemanticBlockDescription,DuitElementType, ElevatedButton, HttpAction } = require("duit_js");

function someBlock() {
    const layout = DecoratedBox({
        attributes: {
            decoration: {
                color: "#DCDCDC",
                borderRadius: 8.0,
                boxShadow: [
                  {
                    color: "#a0a0a0",
                    offset: {
                        dx: 2.0,
                        dy: 2.0,
                    },
                    blurRadius: 2.0,
                    spreadRadius: 2.0,
                  }  
                ]
            }
        }
    }).addChild(
        Padding({
            attributes: {
                padding: 16,
            }
        }).addChild(
            Row({}).addChildren([
                Image({attributes:{
                    type: "network",
                    src: "",
                    fit: "contain",
                    refs: [
                        Ref("src", "image"),
                    ]
                }}),
                SizedBox({attributes: {width: 16}}),
                Column({attributes: {
                    mainAxisAlignment: "spaceEvenly",
                }}).addChildren([
                    Text({attributes: {
                        style: {
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#8a8a8a",
                        },
                        refs: [
                            Ref("data", "primary"),
                        ]
                    }}),
                    Text({attributes: {
                        style: {
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#FFFFF",
                        },
                        refs: [
                            Ref("data", "description"),
                        ]
                    }}),
                    Text({attributes: {
                        style: {
                            fontSize: 16,
                            fontWeight: 500,
                            color: [0,0,0,1],
                        },
                        refs: [
                            Ref("data", "cost"),
                        ]
                    }})
                ])
            ])
        )
    )
    return SemanticBlockDescription("shoes_card", layout);
}

function componentExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            SizedBox({attributes: {height: 24}}),
        SemanticBlock({
            data: {
                "image": "https://resizer.mail.ru/p/b0685008-5021-5715-a506-e73621c958f5/AQAFGR6McYd06E2eQ8J-GzknNO9eDHZcCIpgrre-K3SwrZ0QnmOBQVPyD6yWisBlYJYZ38YEM768jMY1M4m4NYbQkmM.jpg",
                "primary": "Лабутены",
                "description": "Топовые и дорогие",
                "cost": "$100",
            },
            tag: "shoes_card",
            id: "shoes_card1",
        }),
        SizedBox({attributes: {height: 24}}),
        SemanticBlock({
            data: {
                "image": "https://ae04.alicdn.com/kf/A1255f8c200964840b940a3c7537ab567g.jpeg",
                "primary": "Найки",
                "description": "Обычные кросовки с рынка",
                "cost": "$100",
            },
            tag: "shoes_card",
            id: "shoes_card2",
        }),
        SizedBox({attributes: {height: 24}}),
        SemanticBlock({
            data: {
                "image": "https://static.lichi.com/product/44640/9d56d4435e5bc814b979c2ebcffdb9b7.jpg?v=0_44640.0&resize=size-middle",
                "primary": "Туфельки",
                "description": "Очень крутые!",
                "cost": "$150",
            },
            tag: "shoes_card",
            id: "shoes_card3",
        }),
        SizedBox({attributes: {height: 24}}),
        ElevatedButton({attributes: {}, action: new HttpAction("/send_component_update", {method: "GET"}) })
        ]
    )

    return builder.build();
}

module.exports = {componentExample, someBlock}