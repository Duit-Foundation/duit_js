import { RemoteSubtreeAttributes } from "../attributes";
import { RemoteSubtreeUiElement } from "../widget_models";
import { BaseProps } from "../widget_models/props";

export const RemoteSubtree = (props: BaseProps<RemoteSubtreeAttributes>): RemoteSubtreeUiElement => {
    return new RemoteSubtreeUiElement(props.attributes, props.id);
}