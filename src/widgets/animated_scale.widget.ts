import { AnimatedScaleUiElement } from "../widget_models";

import type { AnimatedScaleAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

/**
 * Example usage:
 * 
 * AnimatedScale(
 *     {
 *         id: "id",
 *         attributes: {
 *             scale: 2.0,
 *             duration: 1000,
 *         },
 *     },
 *     // child
 * )
 */
export const AnimatedScale = (props: BaseProps<AnimatedScaleAttributes>, child?: DuitElement): AnimatedScaleUiElement => {
    return new AnimatedScaleUiElement(props.attributes, props.id, child);
}