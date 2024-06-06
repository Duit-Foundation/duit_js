import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { ColoredBoxAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class ColoredBoxUiElement extends SingleChildLayout {
  type = DuitElementType.coloredBox as const;
  attributes: ColoredBoxAttributes;

  constructor(attrs: ColoredBoxAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}