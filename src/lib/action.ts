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

interface ExecutionOptions {
    modifier: "throttle" | "debounce";
    duration: number;
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
    executionOptions?: ExecutionOptions;

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
    constructor(event: string, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) {
        this.event = event;
        this.dependsOn = dependsOn;
        this.executionOptions = executionOptions;
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

    constructor(event: string, meta: HttpActionMetainfo, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) {
        super(event, dependsOn, executionOptions);
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
    constructor(event: string, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) {
        super(event, dependsOn, executionOptions);
    }
}

class _LocalExecutedAction extends BaseAction {
    executionType = ExecutionType.local as const;
    payload: ServerEvent;
    constructor(payload: ServerEvent, executionOptions?: ExecutionOptions) {
        super("local_event", [], executionOptions);
        this.payload = payload;
    }
}

class _ScriptAction extends BaseAction {
    executionType = ExecutionType.script as const;
    script: Script;
    constructor(event: string, script: Script, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) {
        super(event, dependsOn, executionOptions);
        this.script = script;
    }
}

export const HttpAction = (event: string, meta: HttpActionMetainfo, dependsOn?: ActionDependency[], executionOptions?: ExecutionOptions) => {
    return new _HttpAction(event, meta, dependsOn, executionOptions);
}

export const LocalExecutedAction = (payload: ServerEvent, executionOptions?: ExecutionOptions) => {
    return new _LocalExecutedAction(payload, executionOptions);
}


export const WebSocketAction = (event: string, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) => {
    return new _WebSocketAction(event, dependsOn, executionOptions);
}

export const ScriptAction = (event: string, script: Script, dependsOn: ActionDependency[] = [], executionOptions?: ExecutionOptions) => {
    return new _ScriptAction(event, script, dependsOn, executionOptions);
}