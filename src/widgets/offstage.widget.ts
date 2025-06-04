import { OffstageUiElement } from "../widget_models";

import type { OffstageAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";

export const Offstage = (props: BaseProps<OffstageAttributes>, child?: DuitElement): OffstageUiElement => {
    return new OffstageUiElement(props.attributes, child, props.controlled, props.id);
}