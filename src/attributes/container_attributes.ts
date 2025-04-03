import type { Color } from "./properties/color"
import type { EdgeInsets } from "./properties/insets"
import type { Alignment } from "./properties/alignment"
import type { BoxConstraints } from "./properties/box_constraits"
import type { Clip } from "./properties/clip"
import type { BoxDecoration } from "./properties/decoration"
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { AnimatedPropertyOwner, ImplicitAnimatable } from "../animations"
import type { ThemeConsumer } from "./theme";

interface ContainerProps {
    constraints?: BoxConstraints
    padding?: EdgeInsets
    margin?: EdgeInsets
    alignment?: Alignment
    transformAlignment?: Alignment
    color?: Color
    decoration?: BoxDecoration
    foregroundDecoration?: BoxDecoration
    width?: number
    height?: number
    clipBehavior?: keyof typeof Clip;
}

export interface ContainerAttributes extends ValueReferenceHolder<ContainerAttributes>, AnimatedPropertyOwner, ThemeConsumer, ContainerProps { }

export interface AnimatedContainerAttributes extends ValueReferenceHolder<AnimatedContainerAttributes>, ImplicitAnimatable, ThemeConsumer, ContainerProps { }