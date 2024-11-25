import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ConstrainerBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class ConstrainedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.constrainedBox as const;
  attributes: ConstrainerBoxAttributes;

  constructor(attrs: ConstrainerBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}