import { CenterUiElement, CheckBoxUiElement, ColoredBoxUiElement, ColumnUiElement, ContainerUiElement, DecoratedBoxUiElement, ExpandedUiElement, GestureDetectorUiElement, ImageUiElement, LifecycleEventListenerUiElement, PaddingUiElement, PositionedUiElement, RichTextUiElement, RowUiElement, ComponentUiElement, SizedBoxUiElement, StackUiElement, TextFieldUiElement, TextUiElement, WrapUiElement, RadioUiElement, RadioGroupContextUiElement, SingleChildScrollViewUiElement, OpacityUiElement, IgnorePoinerUiElement, SliderUiElement } from "../widget_models";

export type DuitLayoutElement =
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
    | RadioGroupContextUiElement;

export type DuitElement =
    TextUiElement
    | RadioUiElement
    | SliderUiElement
    | CheckBoxUiElement
    | TextFieldUiElement
    | ImageUiElement
    | RichTextUiElement
    | DuitLayoutElement;