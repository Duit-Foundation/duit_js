import type { BorderSide } from "./border";
import type { BorderRadius } from "./border_radius";

class BorderBase {
    side: BorderSide;

    constructor(side: BorderSide) {
        this.side = side;
    }
}

export enum ShapeBorderType {
    RoundedRectangleBorder = "RoundedRectangleBorder",
    CircleBorder = "CircleBorder",
    StadiumBorder = "StadiumBorder",
    BeveledRectangleBorder = "BeveledRectangleBorder",
    ContinuousRectangleBorder = "ContinuousRectangleBorder",
}

class RoundedRectangleBorder extends BorderBase {
    type = ShapeBorderType.RoundedRectangleBorder as const;
    borderRadius?: BorderRadius;
}

class CircleBorder extends BorderBase {
    type = ShapeBorderType.CircleBorder as const;
}

class StadiumBorder extends BorderBase {
    type = ShapeBorderType.StadiumBorder as const;
}

class BeveledRectangleBorder extends BorderBase {
    type = ShapeBorderType.BeveledRectangleBorder as const;
    borderRadius?: BorderRadius;
}

class ContinuousRectangleBorder extends BorderBase {
    type = ShapeBorderType.ContinuousRectangleBorder as const;
    borderRadius?: BorderRadius;
}

export type ShapeBorder = RoundedRectangleBorder | CircleBorder | StadiumBorder | BeveledRectangleBorder | ContinuousRectangleBorder;