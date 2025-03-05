import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

export interface IgnorePointerAttributes extends ValueReferenceHolder<IgnorePointerAttributes>, ThemeConsumer {
    ignoring: boolean
}