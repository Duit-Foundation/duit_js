import type { ImplicitAnimatable } from "../animations";
import type { EdgeInsets } from "./properties/insets";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";
import { Alignment, Curves } from "./properties";


export interface AnimatedCrossFadeAttributes extends ValueReferenceHolder<AnimatedCrossFadeAttributes>, ThemeConsumer, ImplicitAnimatable {
    reverseDuration?: number;
    firstCurve?: keyof typeof Curves;
    secondCurve?: keyof typeof Curves;
    sizeCurve?: keyof typeof Curves;
    excludeBottomFocus?: boolean;
    alignment?: keyof typeof Alignment;
    /** Where 0 - CrossFadeState.showFirst, 1 - CrossFadeState.showSecond */
    crossFadeState: number;
}