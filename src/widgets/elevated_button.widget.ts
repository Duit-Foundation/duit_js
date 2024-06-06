import { ElevatedButtonAttributes } from "../attributes";
import { ElevatedButtonUiElement } from "../widget_models";
import { PropsWithAction } from "../widget_models/props";

export const ElevatedButton = (props: PropsWithAction<ElevatedButtonAttributes>): ElevatedButtonUiElement => {
    return new ElevatedButtonUiElement(props.attributes, props.id, props.action);
}