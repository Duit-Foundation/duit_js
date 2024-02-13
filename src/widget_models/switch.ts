import { DuitLeafElement } from "./child";
import DuitElementType from "../lib/element_type";

import type { BaseAction } from "../lib/action";
import type { PropsWithAction } from "./props";
import type { SwichAttributes } from "../attributes";

export class SwitchUiElement extends DuitLeafElement {
  type = DuitElementType.switch as const;
  attributes: SwichAttributes;

  constructor(attrs: SwichAttributes, id?: string, action?: BaseAction) {
    super(id, action, true);
    this.attributes = attrs;
  }
}

export const Switch = (props: PropsWithAction<SwichAttributes>): SwitchUiElement => {
  return new SwitchUiElement(props.attributes, props.id, props.action);
}