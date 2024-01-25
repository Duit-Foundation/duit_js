import { CenterUiElement, CheckBoxUiElement, ColoredBoxUiElement, ColumnUiElement, ContainerUiElement, DecoratedBoxUiElement, ExpandedUiElement, GestureDetectorUiElement, ImageUiElement, LifecycleEventListenerUiElement, PaddingUiElement, PositionedUiElement, RichTextUiElement, RowUiElement, ComponentUiElement, SizedBoxUiElement, StackUiElement, TextFieldUiElement, TextUiElement, WrapUiElement, RadioUiElement, RadioGroupContextUiElement, SingleChildScrollViewUiElement, IgnorePoinerUiElement } from "../widget_models";


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
    | IgnorePoinerUiElement
    | RadioGroupContextUiElement;

export type DuitElement =
    TextUiElement
    | RadioUiElement
    | CheckBoxUiElement
    | TextFieldUiElement
    | ImageUiElement
    | RichTextUiElement
    | DuitLayoutElement;