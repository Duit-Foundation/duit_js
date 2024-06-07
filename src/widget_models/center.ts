import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { CenterAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class CenterUiElement extends SingleChildLayout {
  type = DuitElementType.center as const;
  attributes: CenterAttributes;

  constructor(attrs: CenterAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}