import { DuitLeafElement, MultiChildLayout, SingleChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { BaseAction } from "../lib/action";
import type { DuitElement } from "../lib/element";

export class CustomWidget<T> extends DuitLeafElement {
    type = DuitElementType.custom as const;
    attributes: T;
    tag: string;

    constructor(attrs: T, tag: string, id?: string, action?: BaseAction, controlled?: boolean) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.tag = tag;
    }
}

export class CustomSingleChildWidget<T> extends SingleChildLayout {
    type = DuitElementType.custom as const;
    attributes: T;
    tag: string;

    constructor(attrs: T, tag: string, id?: string, action?: BaseAction, controlled?: boolean, child?: DuitElement) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.tag = tag;
        this.child = child;
    }
}

export class CustomMultiChildWidget<T> extends MultiChildLayout {
    type = DuitElementType.custom as const;
    attributes: T;
    tag: string;

    constructor(attrs: T, tag: string, id?: string, action?: BaseAction, controlled?: boolean, children?: DuitElement[]) {
        super(id, action, controlled);
        this.attributes = attrs;
        this.tag = tag;
        this.children = children;
    }
}