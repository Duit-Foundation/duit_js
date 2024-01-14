import type { EdgeInsets } from "../utils/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface PaddingAttributes extends ValueReferenceHolder<PaddingAttributes> {
    padding: EdgeInsets,
}