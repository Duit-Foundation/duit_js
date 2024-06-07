import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { TransformAttributes, TransformType } from "../attributes";
import type { DuitElement } from "../lib/element";

export class TransformUiElement<T extends keyof typeof TransformType = "scale"> extends SingleChildLayout {
  type = DuitElementType.transform as const;
  attributes: TransformAttributes<T>;

  constructor(attrs: TransformAttributes<T>, id?: string, controlled?: boolean, child?: DuitElement) {
    super(id, null, controlled);
    this.attributes = attrs;
    this.child = child;
  }
}