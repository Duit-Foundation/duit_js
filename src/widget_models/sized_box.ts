import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { SizedBoxAttributes } from "../attributes/sized_box_attributes";
import type { DuitElement } from "../lib/element";

export class SizedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.sizedBox as const;
  attributes: SizedBoxAttributes;

  constructor(attrs: SizedBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}