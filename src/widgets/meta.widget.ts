import { MetaUiElement } from "../widget_models";

import type { MetaAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const Meta = (props: BaseProps<MetaAttributes>, child?: DuitElement): MetaUiElement => {
    return new MetaUiElement(props.attributes, props.id, child);
}