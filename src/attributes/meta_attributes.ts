import type { ValueReferenceHolder } from "./value_reference_holder";

export type MetaAttributes = Record<string, any> & ValueReferenceHolder<Record<string, any>>;