import { ListViewUiElement } from "../widget_models";

import type { ListViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { PropsWithAction } from "../widget_models/props";

export const ListViewWidget = (props: PropsWithAction<ListViewAttributes>, children?: DuitElement[]) => (): ListViewUiElement => {
    return new ListViewUiElement(props.attributes, props.id, props.controlled, props.action, children);
}