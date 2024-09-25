import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "../widget_models/child";

import type { IntrinsicHeightAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class IntrinsicHeightUiElement extends SingleChildLayout {
  type = DuitElementType.intrinsicHeight as const;
  attributes: IntrinsicHeightAttributes;

  constructor(attrs: IntrinsicHeightAttributes, id?: string, child?: DuitElement) {
    super(id, null, false);
    this.attributes = attrs;
    this.child = child;
  }
}