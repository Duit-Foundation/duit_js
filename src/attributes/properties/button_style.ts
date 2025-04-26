import type { BorderSide } from "./border";
import type { Color } from "./color";
import type { EdgeInsets } from "./insets";
import type { MaterialTapTargetSize } from "./mateatial_tap_target_size";
import type { MaterialStateProperty } from "./material_state";
import type { ShapeBorder } from "./shape_border";
import type { Size } from "./size";
import type { TextStyle } from "./text_style";
import type { VisualDensity } from "./visual_density";

export interface ButtonStyle {
    textStyle?: MaterialStateProperty<TextStyle>;
    backgroundColor?: MaterialStateProperty<Color>;
    foregroundColor?: MaterialStateProperty<Color>;
    overlayColor?: MaterialStateProperty<Color>;
    shadowColor?: MaterialStateProperty<Color>;
    elevation?: MaterialStateProperty<number>;
    padding?: MaterialStateProperty<EdgeInsets>;
    minimumSize?: MaterialStateProperty<Size>;
    maximumSize?: MaterialStateProperty<Size>;
    iconColor?: MaterialStateProperty<Color>;
    iconSize?: MaterialStateProperty<number>;
    side?: MaterialStateProperty<BorderSide>;
    shape?: MaterialStateProperty<ShapeBorder>;
    visualDensity?: VisualDensity;
    tapTargetSize?: MaterialTapTargetSize;
    animationDuration?: number;
}