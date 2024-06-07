import { RadioUiElement, RadioGroupContextUiElement } from "../widget_models";

import type { RadioAttributes, RadioGroupContextAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";

export const Radio = (props: PropsWithAction<RadioAttributes>): RadioUiElement => {
    return new RadioUiElement(props.attributes, props.id, props.controlled);
}

export const RadioGroupContext = (props: PropsWithAction<RadioGroupContextAttributes>, child?: DuitElement): RadioGroupContextUiElement => {
    return new RadioGroupContextUiElement(props.attributes, props.id, props.action, child);
}