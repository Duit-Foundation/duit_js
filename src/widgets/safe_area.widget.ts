import { SafeAreaUiElement } from "../widget_models";

import type { SafeAreaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SafeArea = (props: BaseProps<SafeAreaAttributes>, child?: DuitElement): SafeAreaUiElement => {
    return new SafeAreaUiElement(props.attributes, props.id, props.controlled, child);
}