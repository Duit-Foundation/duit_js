import { MultiChildLayout } from "./child";
import DuitElementType from "../lib/element_type";

import type { CarouselViewAttributes } from "../attributes";
import type { BaseProps } from "./props";
import type { DuitElement } from "../lib/element";

export class CarouselViewUiElement extends MultiChildLayout {
    type = DuitElementType.carouselView as const;
    attributes: CarouselViewAttributes;

    constructor(props: BaseProps<CarouselViewAttributes>, children?: DuitElement[]) {
        super(props.id, null, props.controlled);
        this.attributes = props.attributes;
        this.children = children;
    }
}