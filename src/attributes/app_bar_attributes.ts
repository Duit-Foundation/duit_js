import type { AnimatedPropertyOwner } from "../animations";
import type { Color } from "./properties/color";
import type { TextStyle } from "./properties/text_style";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import type { Clip, EdgeInsets, ShapeBorder } from "./properties";

export interface AppBarAttributes extends ValueReferenceHolder<AppBarAttributes>, AnimatedPropertyOwner, ThemeConsumer {
    shadowColor?: Color;
    backgroundColor?: Color;
    foregroundColor?: Color;
    surfaceTintColor?: Color;
    titleTextStyle?: TextStyle;
    toolbarTextStyle?: TextStyle;
    centerTitle?: boolean;
    excludeHeaderSemantics?: boolean;
    primary?: boolean;
    automaticallyImplyLeading?: boolean;
    forceMaterialTransparency?: boolean;
    elevation?: number;
    titleSpacing?: number;
    toolbarOpacity?: number;
    bottomOpacity?: number;
    toolbarHeight?: number;
    leadingWidth?: number;
    scrolledUnderElevation?: number;
    shape?: ShapeBorder; // ShapeBorder
    clipBehavior?: keyof typeof Clip; // Clip
    actionsPadding?: EdgeInsets;
} 