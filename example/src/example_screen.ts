import { DuitView, AnimatedBuilder, Container, AnimationMethod, AnimationTrigger, Center, Text } from "../../dist";
import { Offset } from "../../dist/attributes/properties/offset";


export function exampleScreen() {
    const builder = DuitView.builder();

    const root = AnimatedBuilder({
        id: "rootAnimator",
        attributes: {
            tweenDescriptions: [
                {
                    type: "tween",
                    animatedPropKey: "width",
                    duration: 2000,
                    begin: 100,
                    end: 200,
                    trigger: AnimationTrigger.onEnter,
                    method: AnimationMethod.forward,
                },
                {
                    type: "tween",
                    animatedPropKey: "height",
                    duration: 1500,
                    begin: 100,
                    end: 200,
                    trigger: AnimationTrigger.onEnter,
                    method: AnimationMethod.repeat,
                    reverseOnRepeat: true,
                },
                {
                    type: "decorationTween",
                    animatedPropKey: "decoration",
                    duration: 1000,
                    begin: {
                        color: "#DCDCDC",
                        borderRadius: 8,
                        border: {
                            width: 1,
                            color: "#32a852"
                        }
                    },
                    end: {
                        color: "#32a852",
                        borderRadius: 65,
                        boxShadow: [
                            {
                                offset: new Offset(16, 16),
                                color: "#FFE4E1",
                            }
                        ],
                        border: {
                            width: 5,
                            color: "#DCDCDC"
                        }
                    },
                    trigger: AnimationTrigger.onEnter,
                    method: AnimationMethod.repeat,
                    reverseOnRepeat: true,
                },
                {
                    type: "textStyleTween",
                    animatedPropKey: "style",
                    duration: 500,
                    curve: "linear",
                    trigger: AnimationTrigger.onEnter,
                    method: AnimationMethod.repeat,
                    reverseOnRepeat: true,
                    begin: {
                        color: "#B2238E",
                        fontWeight: 400,
                        fontSize: 12,
                    },
                    end: {
                        color: "#231F20",
                        fontWeight: 700,
                        fontSize: 24,
                    }
                }
            ],
        }
    }, Container({
        attributes: {
            affectedProperties: ["width", "height", "decoration"],
            parentBuilderId: "rootAnimator",
            width: 100,
            height: 100,
            decoration: {
                color: "#32a852",
                borderRadius: 8,
                border: {
                    width: 1,
                    color: "#DCDCDC"
                }
            }
        }
    }, Center({
        attributes: {}
        }, Text({ attributes: { data: "Hello,", affectedProperties: ["style"], parentBuilderId: "rootAnimator"} })))
    );

    builder.rootFrom(root);

    return builder.build();
}