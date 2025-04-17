import { AnimatedRotationUiElement } from "../widget_models";

import type { AnimatedRotationAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

/**
 * Example usage:
 * 
 * AnimatedRotation(
 *     {
 *         id: "id",
 *         attributes: {
 *             turns: 3.14,
 *             duration: 1000,
 *         },
 *     },
 *     // child
 * )
 */
export const AnimatedRotation = (props: BaseProps<AnimatedRotationAttributes>, child?: DuitElement): AnimatedRotationUiElement => {
    return new AnimatedRotationUiElement(props.attributes, props.id, child);
}