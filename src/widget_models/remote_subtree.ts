import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

import type { RemoteSubtreeAttributes } from "../attributes";

export class RemoteSubtreeUiElement extends DuitLeafElement {
  type = DuitElementType.remoteSubtree as const;
  attributes: RemoteSubtreeAttributes;

  constructor(attrs: RemoteSubtreeAttributes, id?: string) {
    super(id, null, true);
    this.attributes = attrs;
  }
}