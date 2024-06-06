import { RichTextUiElement } from "../widget_models";

import type { RichTextAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const RichText = (props: BaseProps<RichTextAttributes>): RichTextUiElement => {
    return new RichTextUiElement(props.attributes, props.id, props.controlled);
}