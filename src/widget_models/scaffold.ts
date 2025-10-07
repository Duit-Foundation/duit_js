import DuitElementType from "../lib/element_type";
import { ListChild, MultiChildLayout } from "./child";

import type { ScaffoldAttributes } from "../attributes";

export class ScaffodUiElement extends MultiChildLayout {
  type = DuitElementType.scaffold as const;
  attributes: ScaffoldAttributes;

  constructor(attrs: ScaffoldAttributes, id?: string, children?: ListChild[]) {
    super(id, null, true);
    this.attributes = attrs;
    this.children = children;
  }
}