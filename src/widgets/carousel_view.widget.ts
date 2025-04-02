import { CarouselViewUiElement } from "../widget_models";

import type { CarouselViewAttributes } from "../attributes";
import type { DuitElement } from "../lib/element";
import type { BaseProps } from "../widget_models/props";

export const CarouselView = (props: BaseProps<CarouselViewAttributes>, children?: DuitElement[]): CarouselViewUiElement => {
    return new CarouselViewUiElement(props, children);
}