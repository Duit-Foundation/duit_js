import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

import type { ScaffoldAttributes } from "../attributes";

export class ScaffodUiElement extends DuitLeafElement {
  type = DuitElementType.scaffold as const;
  attributes: ScaffoldAttributes;

  constructor(attrs: ScaffoldAttributes, id?: string) {
    super(id, null, true);
    this.attributes = attrs;
  }
}