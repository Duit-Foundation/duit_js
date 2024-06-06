import { ColoredBoxUiElement } from "../widget_models";
import type { ColoredBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const ColoredBox = (props: BaseProps<ColoredBoxAttributes>, child?: DuitElement): ColoredBoxUiElement => {
    return new ColoredBoxUiElement(props.attributes, props.id, props.controlled, child);
}