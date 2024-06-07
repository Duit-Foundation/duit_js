import { AnimatedPropertyOwner } from "../animations";
import type { AlignmentDirectional } from "./properties/alignment";
import type { Clip } from "./properties/clip";
import type { StackFit } from "./properties/stack_fit";
import type { TextDirection } from "./properties/text_direction";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface StackAttributes extends ValueReferenceHolder<StackAttributes>, AnimatedPropertyOwner {
    alignment?: keyof typeof AlignmentDirectional;
    textDirection?: keyof typeof TextDirection;
    fit?: keyof typeof StackFit;
    clipBehavior?: Clip;
}