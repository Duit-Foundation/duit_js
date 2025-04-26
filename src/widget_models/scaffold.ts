import DuitElementType from "../lib/element_type";
import { SingleChildLayout } from "./child";

import type { ScaffoldAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class ScaffodUiElement extends SingleChildLayout {
  type = DuitElementType.scaffold as const;
  attributes: ScaffoldAttributes;

  constructor(attrs: ScaffoldAttributes, id?: string, child?: DuitElement) {
    super(id, null, true);
    this.attributes = attrs;
    this.child = child;
  }
}