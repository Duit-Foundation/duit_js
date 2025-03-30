import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "../widget_models/child";

import type { InkwellAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";


export class InkWellUiElement extends SingleChildLayout {
  type = DuitElementType.inkWell as const;
  attributes: InkwellAttributes;

  constructor(attrs: InkwellAttributes, id?: string, child?: DuitElement) {
    super(id, null, true);
    this.attributes = attrs;
    this.child = child;
  }
}