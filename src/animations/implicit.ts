import type { Curves } from "../attributes";
import type { BaseAction } from "../lib/action";

export interface ImplicitAnimatable {
    duratuion: number;
    curve?: keyof typeof Curves;
    onEnd?: BaseAction
}