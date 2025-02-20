import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { RepaintBoundaryAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class RepaintBoundaryUiElement extends SingleChildLayout {
  type = DuitElementType.repaintBoundary as const;
  attributes: RepaintBoundaryAttributes;

  constructor(attrs: RepaintBoundaryAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}