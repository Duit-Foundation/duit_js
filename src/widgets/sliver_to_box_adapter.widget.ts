import { SliverToBoxAdapterUIElement } from "../widget_models";

import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const SliverToBoxAdapter= (props: BaseProps<null>, child?: DuitElement): SliverToBoxAdapterUIElement => {
    return new SliverToBoxAdapterUIElement(props.id, props.controlled, child);
}