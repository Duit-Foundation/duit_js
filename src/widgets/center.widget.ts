import { CenterUiElement } from "../widget_models";

import type { CenterAttributes } from "../attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";

export const Center = (props: BaseProps<CenterAttributes>, child?: DuitElement): CenterUiElement => {
    return new CenterUiElement(props.attributes, props.id, props.controlled, child);
}