interface ValueRef<T> {
    /**
     * Target property key to replace in attribute
     */
    attributeKey: keyof T;
    /**
     * The key by which the interpreter will look for the value in the resulting object.
     */
    objectKey: string;

    /**
     * Default value, used when the value is not found at data object
     */
    defaultValue: any;
}

export interface ValueReferenceHolder<T> {
    refs?: ValueRef<T>[]
}

/**
 * Creates a new reference from an existing values.
 * @return {ValueRef<T>} The newly created reference.
 */
export const Ref = <T>(attributeKey: keyof T, objectKey: string, defaultValue?: any): ValueRef<T> => {
    const ref: ValueRef<T> = {
        attributeKey: attributeKey,
        objectKey: objectKey,
        defaultValue: defaultValue,
    }
    return ref;
}