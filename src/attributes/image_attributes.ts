import type { Color } from "./properties/color";
import type { Alignment } from "./properties/alignment";
import type { BlendMode } from "./properties/blend_mode";
import type { BoxFit } from "./properties/box_fit";
import type { FilterQuality } from "./properties/filter_quality";
import type { ImageRepeat } from "./properties/image_repeat";
import type { ImageType } from "./properties/image_type";
import type { ValueReferenceHolder } from "./value_reference_holder";
import { AnimatedPropertyOwner } from "../animations";

export interface ImageAttributes extends ValueReferenceHolder<ImageAttributes>, AnimatedPropertyOwner {
    width?: number;
    height?: number;
    cacheWidth?: number;
    cacheHeight?: number;
    color?: Color;
    isAntiAlias?: boolean;
    matchTextDirection?: boolean;
    gaplessPlayback?: boolean;
    excludeFromSemantics?: boolean;
    colorBlendMode?: keyof typeof BlendMode;
    fit?: keyof typeof BoxFit;
    alignment?: Alignment;
    repeat?: keyof typeof ImageRepeat;
    filterQuality?: keyof typeof FilterQuality;
    byteData?: Buffer;
    src: string;
    type: keyof typeof ImageType;
}