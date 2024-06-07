import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { FlexAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";

export class RowUiElement extends MultiChildLayout {
  type = DuitElementType.row as const;
  attributes: FlexAttributes;

  constructor(attrs: FlexAttributes, id?: string, controlled?: boolean, children?: DuitElement[]) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.children = children;
  }
}