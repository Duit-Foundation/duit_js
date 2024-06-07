import { DecoratedBoxUiElement } from "../widget_models";

import type { DecoratedBoxAttributes } from "../attributes/decorated_box_attributes";
import type { BaseProps } from "../widget_models/props";
import type { DuitElement } from "../lib/element";

export const DecoratedBox = (props: BaseProps<DecoratedBoxAttributes>, child?: DuitElement): DecoratedBoxUiElement => {
    return new DecoratedBoxUiElement(props.attributes, props.id, props.controlled, child);
  }
  