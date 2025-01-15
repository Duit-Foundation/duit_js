import { TileMode } from "./tile_mode";

export type ImageFilter = BlurImageFilter | ComposeImageFilter | DilateImageFilter | ErodeImageFilter | MatrixImageFilter;

export interface BlurImageFilter {
    type: 0 | "blur",
    sigmaX: number;
    sigmaY: number;
    tileMode: keyof typeof TileMode;
}

export interface ComposeImageFilter {
    type: 1 | "compose",
    outer: ImageFilter;
    inner: ImageFilter;
}

export interface DilateImageFilter {
    type: 2 | "blur",
    radiusX: number;
    radiusY: number;
}

export interface ErodeImageFilter {
    type: 3 | "erode",
    radiusX: number;
    radiusY: number;
}

export interface MatrixImageFilter {
    type: 4 | "matrix",
    matrix4: number[],
}