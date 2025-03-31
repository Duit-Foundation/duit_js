import { BaseAction } from "../lib/action";
import { BorderRadius, Color, ShapeBorder } from "./properties";
import { MaterialStateProperty } from "./properties/material_state";
import { ThemeConsumer } from "./theme";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface InkwellAttributes extends ValueReferenceHolder<InkwellAttributes>, ThemeConsumer {
    onTap?: BaseAction;
    onDoubleTap?: BaseAction;
    onLongPress?: BaseAction;
    onTapDown?: BaseAction;
    onTapUp?: BaseAction;
    onTapCancel?: BaseAction;
    onSecondaryTapDown?: BaseAction;
    onSecondaryTapCancel?: BaseAction;
    onSecondaryTap?: BaseAction;
    onSecondaryTapUp?: BaseAction;
    focusColor?: Color;
    hoverColor?: Color;
    highlightColor?: Color;
    splashColor?: Color;
    overlayColor?: MaterialStateProperty<Color>;
    radius?: number;
    hoverDuration?: number; //in ms
    borderRadius?: BorderRadius;
    customBorder?: ShapeBorder;
    excludeFromSemantics?: boolean;
    enableFeedback?: boolean;
    autofocus?: boolean;
    canRequestFocus?: boolean;
}