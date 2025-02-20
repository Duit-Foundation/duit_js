
import type { ValueReferenceHolder } from "./value_reference_holder"
import type { ActionDependency } from "../lib/action";

export interface RemoteSubtreeAttributes extends ValueReferenceHolder<RemoteSubtreeAttributes> {
    downloadPath: string;
    data?: any;
    meta?: any;
    dependencies?: ActionDependency[];
}