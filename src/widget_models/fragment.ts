import DuitElementType from "../lib/element_type";
import { DuitLeafElement } from "./child";

export class FragmentUiElement extends DuitLeafElement {
    type = DuitElementType.fragment as const;
    tag: string;

    constructor(tag: string, id?: string) {
      super(id, undefined, false);
      this.tag = tag;
    }
  }