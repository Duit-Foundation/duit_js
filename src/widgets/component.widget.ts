import { DuitElement } from "../lib/element";
import { ComponentUiElement } from "../widget_models";

interface ComponentProps {
    data: Object;
    tag: string;
    id?: string;
}


export const ComponentDescription = (tag: string, layoutRoot: DuitElement) => {
    return {
        tag,
        layoutRoot,
    }
}

export const Component = (props: ComponentProps) => {
    return new ComponentUiElement(props.data, props.tag, props.id);
}