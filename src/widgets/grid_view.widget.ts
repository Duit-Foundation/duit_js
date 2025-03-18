import { GridViewUiElement } from "../widget_models";

import type { GridViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";

export const GridView = (props: PropsWithAction<GridViewAttributes>, children?: DuitElement[]): GridViewUiElement => {
    return new GridViewUiElement(props.attributes, props.id, props.controlled, props.action, children);
}