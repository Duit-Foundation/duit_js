import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DecoratedBoxAttributes } from "../attributes/decorated_box_attributes";
import type { DuitElement } from "../lib/element";

export class DecoratedBoxUiElement extends SingleChildLayout {
  type = DuitElementType.decoratedBox as const;
  attributes: DecoratedBoxAttributes;

  constructor(attrs: DecoratedBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}
