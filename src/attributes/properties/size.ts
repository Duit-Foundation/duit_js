export class Size {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    static zero = new Size(0, 0);

    static square(size: number) {
        return new Size(size, size);
    }
}