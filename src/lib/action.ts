import { ID } from "../utils/id";
import { ServerEvent } from "./event";

type HttpMethod = "POST" | "GET" | "PATCH" | "DELETE";

enum ExecutionType {
    transport = 0,
    local,
    script,
}

interface Script {
    functionName: string;
    sourceCode: string;
    meta?: Record<string, any>;
}

/**
 * Represents an actions dependency.
 * @interface ActionDependency
 */
export interface ActionDependency {
    id: ID;
    target: string;
}

interface HttpActionMetainfo {
    method: HttpMethod;
}

/**
 * Represents a base action that can be performed in the application.
 * @class BaseAction
 */
export class BaseAction {
    dependsOn: ActionDependency[];

    /**
     * Url (for http) of event name (for ws)
     */
    event: string;

    /**
    * Creates a new instance of the BaseAction class.
    * @constructor
    * @param {string} event - The name of the event associated with the action.
    * @param {ActionDependency[]} dependsOn - An array of action dependencies.
    */
    constructor(event: string, dependsOn: ActionDependency[] = []) {
        this.event = event;
        this.dependsOn = dependsOn;
    }
}


/**
 * Represents an HTTP action that can be performed in the application.
 * @class _HttpAction
 * @extends BaseAction
 */
class _HttpAction extends BaseAction {
    meta: HttpActionMetainfo;
    executionType = ExecutionType.transport as const;

    constructor(event: string, meta: HttpActionMetainfo, dependsOn: ActionDependency[] = []) {
        super(event, dependsOn);
        this.meta = meta ?? {};
    }
}

/**
 * Represents a WebSocket action that can be performed in the application.
 * @class WebSocketAction
 * @extends BaseAction
 */
class _WebSocketAction extends BaseAction {
    executionType = ExecutionType.transport as const;
    constructor(event: string, dependsOn: ActionDependency[] = []) {
        super(event, dependsOn);
    }
}

class _LocalExecutedAction extends BaseAction {
    executionType = ExecutionType.local as const;
    payload: ServerEvent;
    constructor(payload: ServerEvent) {
        super("local_event", []);
        this.payload = payload;
    }
}

class _ScriptAction extends BaseAction {
    executionType = ExecutionType.script as const;
    script: Script;
    constructor(event: string, script: Script, dependsOn: ActionDependency[] = []) {
        super(event, dependsOn);
        this.script = script;
    }
}

export const HttpAction = (event: string, meta: HttpActionMetainfo, dependsOn?: ActionDependency[]) => {
    return new _HttpAction(event, meta, dependsOn);
}

export const LocalExecutedAction = (payload: ServerEvent) => {
    return new _LocalExecutedAction(payload);
}


export const WebSocketAction = (event: string, dependsOn: ActionDependency[] = []) => {
    return new _WebSocketAction(event, dependsOn);
}

export const ScriptAction = (event: string, script: Script, dependsOn: ActionDependency[] = []) => {
    return new _ScriptAction(event, script, dependsOn);
}