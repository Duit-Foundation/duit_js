import type { Clip } from "./properties/clip";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface ElevatedButtonAttributes extends ValueReferenceHolder<ElevatedButtonAttributes> {
    autofocus?: boolean;
    clipBehavior?: keyof typeof Clip;
}