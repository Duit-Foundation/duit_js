import { SliverAppBarUiElement } from "../widget_models";

import type { SliverAppBarAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";

export const SliverAppBar = (props: BaseProps<SliverAppBarAttributes>): SliverAppBarUiElement => {
    return new SliverAppBarUiElement(props.attributes, props.id);
} 