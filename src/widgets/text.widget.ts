import { TextUiElement } from "../widget_models";

import type { TextAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const Text = (props: BaseProps<TextAttributes>): TextUiElement => {
    return new TextUiElement(props.attributes, props.id, props.controlled);
}