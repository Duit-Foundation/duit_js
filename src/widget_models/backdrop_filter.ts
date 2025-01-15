import { SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { DuitElement } from "../lib/element";
import type { BackdropFilterAttributes } from "../attributes";


export class BackdropFilterUiElement extends SingleChildLayout {
    type = DuitElementType.backdropFilter as const;
    attributes: BackdropFilterAttributes;

    constructor(attrs: BackdropFilterAttributes, id?: string, controlled?: boolean, child?: DuitElement) {
        super(id, null, controlled);
        this.attributes = attrs;
        this.child = child;
    }
}