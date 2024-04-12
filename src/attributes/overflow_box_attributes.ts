import { OverflowBoxFit } from "./properties";
import { Alignment } from "./properties/alignment";
import { ValueReferenceHolder } from "./value_reference_holder";

export interface OverflowBoxAttributes extends ValueReferenceHolder<OverflowBoxAttributes> {
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    alignment?: keyof typeof Alignment;
    fit?: keyof typeof OverflowBoxFit;
}