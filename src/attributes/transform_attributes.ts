import type { AnimatedPropertyOwner } from "../animations";
import type { Alignment } from "./properties/alignment";
import type { FilterQuality } from "./properties/filter_quality";
import type { Offset } from "./properties/offset";
import type { TransformType } from "./properties/transform_type";
import type { ValueReferenceHolder } from "./value_reference_holder";
import type { ThemeConsumer } from "./theme";

class TransfromBase {
    origin?: Offset;
    alignment?: keyof typeof Alignment;
    transformHitTests?: boolean;
    filterQuality?: keyof typeof FilterQuality;
}

class ScaleTransform extends TransfromBase {
    scale?: number
    scaleX?: number
    scaleY?: number
}

class TranslateTransform extends TransfromBase {
    offset?: Offset;
}

class FlipTransform extends TransfromBase {
    flipX?: boolean;
    flipY?: boolean;
}

class RotateTransform extends TransfromBase {
    angle?: number;
}

type Transfroms = {
    "scale": ScaleTransform,
    "translate": TranslateTransform,
    "rotate": RotateTransform,
    "flip": FlipTransform
}

type InferTransfrom<T extends keyof typeof TransformType> = Transfroms[T]

export interface TransformAttributes<T extends keyof typeof TransformType = "scale"> extends ValueReferenceHolder<InferTransfrom<T>>, AnimatedPropertyOwner, ThemeConsumer {
    type: T;
    data: InferTransfrom<T>
}