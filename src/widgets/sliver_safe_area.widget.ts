import { SliverSafeAreaUiElement } from "../widget_models";

import type { SliverSafeAreaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverSafeArea = (props: BaseProps<SliverSafeAreaAttributes>, child?: DuitElement): SliverSafeAreaUiElement => {
    return new SliverSafeAreaUiElement(props.attributes, props.id, props.controlled, child);
} 