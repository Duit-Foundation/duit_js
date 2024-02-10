import type { BoxFit, Clip } from "./properties";
import { Alignment } from "./properties/alignment";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface FittedBoxAttributes extends ValueReferenceHolder<FittedBoxAttributes> {
    fit?: keyof typeof BoxFit;
    clipBehavior?: keyof typeof Clip;
    alignment?: keyof typeof Alignment;
}