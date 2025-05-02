import { CustomScrollViewUiElement } from "../widget_models";

import type { CustomScrollViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";

export const CustomScrollView = (props: PropsWithAction<CustomScrollViewAttributes>, children?: DuitElement[]): CustomScrollViewUiElement => {
    return new CustomScrollViewUiElement(props.attributes, props.id, props.controlled, children);
}