import {
    AlignAttributes,
    AnimatedOpacityAttributes,
    AnimatedSizeAttributes,
    BackdropFilterAttributes,
    CenterAttributes,
    CheckboxAttributes,
    ColoredBoxAttributes,
    ConstrainedBoxAttributes,
    ContainerAttributes,
    DecoratedBoxAttributes,
    ElevatedButtonAttributes,
    ExpandedAttributes,
    FittedBoxAttributes,
    FlexAttributes,
    IgnorePointerAttributes,
    ImageAttributes,
    IntrinsicWidthAttributes,
    ListViewAttributes,
    OpacityAttributes,
    OverflowBoxAttributes,
    PaddingAttributes,
    PositionedAttributes,
    RadioAttributes,
    RepaintBoundaryAttributes,
    RichTextAttributes,
    RotatedBoxAttributes,
    SafeAreaAttributes,
    SingleChildScrollViewAttributes,
    SizedBoxAttributes,
    SliderAttributes,
    StackAttributes,
    SwichAttributes,
    TextAttributes,
    TextFieldAttributes,
    TransformAttributes,
    WrapAttributes,
} from "../attributes";

type AttrMap =
    | TextAttributes
    | FlexAttributes
    | AlignAttributes
    | AnimatedOpacityAttributes
    | AnimatedSizeAttributes
    | BackdropFilterAttributes
    | CenterAttributes
    | CheckboxAttributes
    | ConstrainedBoxAttributes
    | ContainerAttributes
    | DecoratedBoxAttributes
    | ElevatedButtonAttributes
    | ExpandedAttributes
    | FittedBoxAttributes
    | IgnorePointerAttributes
    | ImageAttributes
    | IntrinsicWidthAttributes
    | ListViewAttributes
    | OpacityAttributes
    | OverflowBoxAttributes
    | PaddingAttributes
    | PositionedAttributes
    | RadioAttributes
    | RepaintBoundaryAttributes
    | RichTextAttributes
    | RotatedBoxAttributes
    | SafeAreaAttributes
    | SingleChildScrollViewAttributes
    | SizedBoxAttributes
    | SliderAttributes
    | StackAttributes
    | SwichAttributes
    | TextFieldAttributes
    | TransformAttributes
    | WrapAttributes
    | ColoredBoxAttributes;

export type ThemeEntry = { type: string; data: AttrMap };

export type Theme = Record<string, ThemeEntry>;
// Example:
//
// const theme: Theme = {
//     h1: {
//         type: DuitElementType.text,
//         data: {
//             style: {
//                 fontSize: 26,
//                 fontWeight: 700,
//             },
//         },
//     },
//     h2: {
//         type: DuitElementType.text,
//         data: {
//             style: {
//                 fontSize: 20,
//                 fontWeight: 600,
//             },
//         },
//     },
//     h3: {
//         type: DuitElementType.text,
//         data: {
//             style: {
//                 fontSize: 16,
//                 fontWeight: 400,
//             },
//         },
//     },
// };
