import { ImageUiElement } from "../widget_models";

import type { ImageAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const Image = (props: BaseProps<ImageAttributes>): ImageUiElement => {
    return new ImageUiElement(props.attributes, props.id, props.controlled);
}