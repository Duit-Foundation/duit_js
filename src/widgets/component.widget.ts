import { DuitElement } from "../lib/element";
import { ComponentUiElement } from "../widget_models";

interface ComponentProps {
    data: Object;
    tag: string;
    id?: string;
}

export class _ComponentDescription {
    private tag: string;
    private layoutRoot: DuitElement;

    constructor(tag: string, layoutRoot: DuitElement) {
        this.tag = tag;
        this.layoutRoot = layoutRoot;
    }
}


export const ComponentDescription = (tag: string, layoutRoot: DuitElement) => {
    return new _ComponentDescription(tag, layoutRoot);
}

export const Component = (props: ComponentProps) => {
    return new ComponentUiElement(props.data, props.tag, props.id);
}