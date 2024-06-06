import { Clip, Alignment, Curves } from "./properties";

export interface AnimatedSizeAttributes {
    duration: number;
    reverseDuration?: number;
    curve: keyof typeof Curves;
    clipBehabior?: keyof typeof Clip;
    alignment?: keyof typeof Alignment;
}