const { SizedBoxUiElement, Radio, Padding, Container, Row, GestureDetector, EdgeInsetsUtils, LocalExecutedAction, UpdateEvent, NavigationEvent, Column, RadioGroupContext, CustomEvent } = require("duit_js");
const { PaddingUiElement } = require("duit_js");
const { CheckBoxUiElement } = require("duit_js");
const { RowUiElement } = require("duit_js");
const { ElevatedButtonUiElement } = require("duit_js");
const { HttpAction } = require("duit_js");
const { TextFieldUiElement } = require("duit_js");
const { TextUiElement } = require("duit_js");
const { DuitView, DuitElementType, } = require("duit_js");

function inputExample() {
    const builder = DuitView.builder();

    const root = builder.createRootOfExactType(DuitElementType.column, {});

    root.addChildren(
        [
            new TextUiElement({data: "Text field 1"}),
            new SizedBoxUiElement({height: 12}),
            new PaddingUiElement({padding: [12, 0, 0, 12]}).addChild(
                new TextFieldUiElement({
                    decoration: {
                        border: {
                            type: 'outline',
                            options: {
                                borderSide: {
                                    width: 3,
                                }
                            }
                        }
                    }
                },"textInput1", new HttpAction("/textInput1change", {method: "GET"}, [{id: "textInput1", target: "value"}]))
            ),
            new SizedBoxUiElement({height: 24}),
            new TextUiElement({data: "Text field 2"}),
            new SizedBoxUiElement({height: 12}),
            new PaddingUiElement({padding: [0, 12]}).addChild(
                new TextFieldUiElement({
                    decoration: {
                        labelText: "TextFieldUiElement",
                        border: {
                            type: 'outline',
                            options: {
                                borderSide: {
                                    width: 3,
                                    color: "#DCDCDC"
                                }
                            }
                        }
                    }
                }, "textInput2", new HttpAction("/textInput2change",{method: "POST"}, [{id: "textInput2", target: "value"}]))
            ),
            new RowUiElement({}).addChildren([
                new CheckBoxUiElement({
                    value: true,
                    fillColor: {
                        selected: "#4287f5",
                    }
                }, "checkBox1"),
                new SizedBoxUiElement({width: 12}),
                new TextUiElement({data: "Checkbox"})
            ]),
            new SizedBoxUiElement({height: 24}),
            new ElevatedButtonUiElement({}, "button1", new HttpAction("/apply", {method: "POST"}, [
                {
                    id: "textInput1",
                    target: "value1"
                },
                {
                    id: "textInput2",
                    target: "value2"
                },
                {
                    id: "checkBox1",
                    target: "checkbox"
                },
                {
                    id: "radioGroup1",
                    target: "radio"
                }
            ])).addChild(new TextUiElement({data: "ElevatedButton"})),
            Padding({
                attributes: {
                    padding: EdgeInsetsUtils.all(12)
                }
            }).addChild(
                GestureDetector({
                    attributes: {
                        behavior: "opaque",
                    }
                }
                ).addChild(
                    Container({
                        attributes: {
                            decoration: {
                                color: "#DCDCDC",
                                borderRadius: 12,
                                border: {
                                    color: "#fcba03",
                                    width: 1.25,
                                }
                            }
                        }
                    }).addChild(
                        RadioGroupContext({
                            attributes: {
                                groupValue: "2",
                            }, id: "radioGroup1",
                        }).addChild(
                            Column({}).addChildren([
                                Row({
                                    attributes: {
                                        mainAxisAlignment: "spaceEvenly"
                                    }
                                }).addChildren([
                                    Radio({attributes: {
                                        value: "1",
                                        splashRadius: 12,
                                        toggleable: true,
                                    }}),
                                    new TextUiElement({data: "Toggle radio button 1"})
                                ]),
                                Row({
                                    attributes: {
                                        mainAxisAlignment: "spaceEvenly"
                                    }
                                }).addChildren([
                                    Radio({attributes: {
                                        value: "2",
                                        splashRadius: 24,
                                        toggleable: true,
                                    }}),
                                    new TextUiElement({data: "Toggle radio button 2"})
                                ]),
                                Row({
                                    attributes: {
                                        mainAxisAlignment: "spaceEvenly"
                                    }
                                }).addChildren([
                                    Radio({attributes: {
                                        value: "3",
                                        splashRadius: 36,
                                        toggleable: true,
                                    }}),
                                    new TextUiElement({data: "Toggle radio button 3"})
                                ])
                            ])
                        )
                    )
                )
            ),
            new SizedBoxUiElement({height: 24}),
            new TextUiElement({data: ""}, "text1", null, true),
            new TextUiElement({data: ""}, "text2", null, true),
            new TextUiElement({data: ""}, "text3", null, true),
            new ElevatedButtonUiElement({}, "custom_action_button", new LocalExecutedAction(new CustomEvent("event1", {}))).addChild(new TextUiElement({data: "Custom event 1 runner"})),
        ]
    )

    return builder.build();
}

module.exports = inputExample