interface ValueRef<T> {
    /**
     * Target property key to replace in attribute
     */
    attributeKey: keyof T;
    /**
     * The key by which the interpreter will look for the value in the resulting object.
     */
    objectKey: string;
}

export interface ValueReferenceHolder<T> {
    refs?: ValueRef<T>[]
}

/**
 * Creates a new reference from an existing values.
 * @return {ValueRef<T>} The newly created reference.
 */
export const Ref = <T>(attributeKey: keyof T, objectKey: string): ValueRef<T> => {
    const ref: ValueRef<T> = {
        attributeKey: attributeKey,
        objectKey: objectKey,
    }
    return ref;
}