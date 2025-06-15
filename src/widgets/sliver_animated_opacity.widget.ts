import { SliverAnimatedOpacityUiElement } from "../widget_models";

import type { SliverAnimatedOpacityAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverAnimatedOpacity = (props: BaseProps<SliverAnimatedOpacityAttributes>, child?: DuitElement): SliverAnimatedOpacityUiElement => {
    return new SliverAnimatedOpacityUiElement(props.attributes, props.id, child);
}