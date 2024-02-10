import { CenterUiElement, CheckBoxUiElement, ColoredBoxUiElement, ColumnUiElement, ContainerUiElement, DecoratedBoxUiElement, ExpandedUiElement, GestureDetectorUiElement, ImageUiElement, LifecycleEventListenerUiElement, PaddingUiElement, PositionedUiElement, RichTextUiElement, RowUiElement, ComponentUiElement, SizedBoxUiElement, StackUiElement, TextFieldUiElement, TextUiElement, WrapUiElement, RadioUiElement, RadioGroupContextUiElement, SingleChildScrollViewUiElement, OpacityUiElement, IgnorePoinerUiElement, SliderUiElement, CustomSingleChildWidget, CustomMultiChildWidget, AlignUiElement, TransformUiElement } from "../widget_models";
import { DuitLeafElement } from "../widget_models/child";

export type DuitLayoutElement<T = any> =
    ColumnUiElement
    | RowUiElement
    | ColoredBoxUiElement
    | SizedBoxUiElement
    | CenterUiElement
    | StackUiElement
    | ExpandedUiElement
    | PaddingUiElement
    | DecoratedBoxUiElement
    | ContainerUiElement
    | GestureDetectorUiElement
    | WrapUiElement
    | LifecycleEventListenerUiElement
    | ComponentUiElement
    | PositionedUiElement
    | SingleChildScrollViewUiElement
    | OpacityUiElement
    | IgnorePoinerUiElement
    | CustomSingleChildWidget<T>
    | CustomMultiChildWidget<T>
    | AlignUiElement
    | TransformUiElement
    | RadioGroupContextUiElement;

export type DuitElement =
    TextUiElement
    | DuitLeafElement
    | RadioUiElement
    | SliderUiElement
    | CheckBoxUiElement
    | TextFieldUiElement
    | ImageUiElement
    | RichTextUiElement
    | ComponentUiElement
    | DuitLayoutElement;