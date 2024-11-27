import { AnimatedPropertyOwner } from "../animations";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface RotatedBoxAttributes extends ValueReferenceHolder<RotatedBoxAttributes>, AnimatedPropertyOwner {
    quarterTurns: number; //int value
}