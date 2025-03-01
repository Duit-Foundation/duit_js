import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface ExpandedAttributes extends ValueReferenceHolder<ExpandedAttributes>, ThemeConsumer {
    flex?: number
}