# React broadcast channel

![last commit](https://img.shields.io/github/last-commit/jhony-24/react-broadcast-channel)
![version](https://img.shields.io/npm/v/react-web-broadcast-channel?color=red)
![size](https://img.shields.io/bundlephobia/min/react-web-broadcast-channel?color=orange)
![licence](https://img.shields.io/github/license/jhony-24/react-broadcast-channel)
![code](https://img.shields.io/github/languages/top/jhony-24/react-broadcast-channel)

Implementation of [**BroadcastChannel API**](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) in react to emit and subscribe any messages to a particular channel.

<a href="https://codesandbox.io/s/react-web-broadcast-channel-demo-4t2vk" target="_blank">DEMO</a>

## Installation

To install, you can use npm or yarn:

```console
$ npm install react-web-broadcast-channel
$ yarn add react-web-broadcast-channel
```

## Examples

If you open other tab in your browser, you cant see how the message sent is updated in all tabs.

```javascript
import React from 'react';
import { useBroadcastChannelEmitter } from "react-web-broadcast-channel"


const TEST_CHANNEL = "TEST_CHANNEL";

export default function App() {
  const { emit, data } = useBroadcastChannelEmitter(TEST_CHANNEL);

  const sendMessage = () => {
    emit(prompt())
  }


  return(
    <div>
      <button onClick={sendMessage}>emit event</button>
      <h1>{data}</h1>
    </div>
  )
}
```

## Emiting messages to channel

```javascript
import { useEffect } from "react";
import { 
  BroadcastSubscriber, 
  BroadcastEmiter, 
  useBroadcastChannelEmitter 
} from "react-web-broadcast-channel";

function EmitMessageFromA() {
    const { emit } = useBroadcastChannelEmitter(TEST_CHANNEL);
    
    const sendMessage = () => {
      emit(prompt())
    }

    return <button onClick={sendMessage}>send message from a</button>
}

function EmitMessageFromB() {
    return(
     <BroadcastEmiter channel={TEST_CHANNEL}>
       {(emit) => {
         return <button onClick={() => emit(prompt()) }>
           send message from b
         </button>    
       }}
     </BroadcastEmiter>
    )
}


```

## Suscribe a channel 

```javascript
import { BroadcastSubscriber, useBroadcastChannelSubscribe } from "react-web-broadcast-channel";

function SubscriberA() {
  const { data } = useBroadcastChannelSubscribe(TEST_CHANNEL);
  useEffect(() => {
    console.log(data)
  },[data])

  return <div>Subscribe from A</div>
}

function SubscriberB() {
  return(
   <BroadcastSubscriber channel={TEST_CHANNEL}>
    {(data) => (
      <div>{data}<div>
    )}
   </BroadcastSubscriber>
  ) 
}
```
