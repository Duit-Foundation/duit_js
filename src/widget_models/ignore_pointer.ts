import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { IgnorePointerAttributes } from "../attributes";
import type { BaseProps } from "./props";

export class IgnorePoinerUiElement extends SingleChildLayout {
  type = DuitElementType.ignorePointer as const;
  attributes: IgnorePointerAttributes;

  constructor(attrs: IgnorePointerAttributes, id?: string, controlled?: boolean) {
    super(id, null, controlled);
    this.attributes = attrs;
  }
}

export const IgnorePoiner = (props: BaseProps<IgnorePointerAttributes>): IgnorePoinerUiElement => {
  return new IgnorePoinerUiElement(props.attributes, props.id, props.controlled);
}