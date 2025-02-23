import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "../widget_models/child";

import type { IntrinsicWidthAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class IntrinsicWidthUiElement extends SingleChildLayout {
  type = DuitElementType.intrinsicWidth as const;
  attributes: IntrinsicWidthAttributes;

  constructor(attrs: IntrinsicWidthAttributes, id?: string, child?: DuitElement) {
    super(id, null, false);
    this.attributes = attrs;
    this.child = child;
  }
}