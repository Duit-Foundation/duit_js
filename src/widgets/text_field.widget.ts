import { TextFieldUiElement } from "../widget_models";

import type { TextFieldAttributes } from "../attributes";
import type { PropsWithAction } from "../widget_models/props";

export const TextField = (props: PropsWithAction<TextFieldAttributes>): TextFieldUiElement => {
    return new TextFieldUiElement(props.attributes, props.id, props.action);
}