import { ReactElement } from "react";

export type Handler<Payload> = (payload ?: Payload) => void

export type EmitPostMessage = string | object | number | boolean;

// component and hooks types

export type BroadcastEmiterProps = {
    channel : string,
    children ?: (emit : (message : EmitPostMessage) => void) => ReactElement 
}

export type BroadcastSubscriberProps = {
    channel : string,
    children ?: (message : EmitPostMessage) =>  ReactElement
}


export type CallbackEvent = (data : EmitPostMessage) => void;

export interface BroadcastChannelItem {
    broadcastChannel  : BroadcastChannel,
    callbacks : CallbackEvent[]
}