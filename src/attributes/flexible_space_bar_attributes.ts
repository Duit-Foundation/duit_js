import type { AnimatedPropertyOwner } from "../animations";
import type { CollapseMode, StretchMode } from "./properties";
import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { DuitElement } from "../lib/element";

export interface FlexibleSpaceBarAttributes extends ValueReferenceHolder<FlexibleSpaceBarAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    title?: DuitElement; // Widget
    background?: DuitElement; // Widget
    titlePadding?: EdgeInsets;
    collapseMode?: keyof typeof CollapseMode;
    stretchModes?: (keyof typeof StretchMode)[];
    centerTitle?: boolean;
    expandedTitleScale?: number;
} 