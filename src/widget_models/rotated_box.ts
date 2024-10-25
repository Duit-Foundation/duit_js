import DuitElementType from "../lib/element_type";
import { DuitLeafElement, SingleChildLayout } from "./child";

import type { RotatedBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class RotatedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.rotatedBox as const;
  attributes: RotatedBoxAttributes;

  constructor(attrs: RotatedBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child  = child;
  }
}