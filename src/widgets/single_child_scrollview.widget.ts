import { SingleChildScrollViewUiElement } from "../widget_models";

import type { SingleChildScrollViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SingleChildScrollView = (props: BaseProps<SingleChildScrollViewAttributes>, child?: DuitElement): SingleChildScrollViewUiElement => {
    return new SingleChildScrollViewUiElement(props.attributes, props.id, props.controlled, child);
}