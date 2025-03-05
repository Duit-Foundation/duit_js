import type { AnimatedPropertyOwner } from "../animations";
import type { BlendMode, ImageFilter } from "./properties";
import type { ThemeConsumer } from "./theme";
import type { ValueReferenceHolder } from "./value_reference_holder";

export interface BackdropFilterAttributes extends ValueReferenceHolder<BackdropFilterAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    blendMode?: BlendMode;
    filter: ImageFilter;
}