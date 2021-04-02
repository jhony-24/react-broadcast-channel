import { useCallback, useEffect, useState } from 'react';
import { emitMessageFromChannel, getChannelByName } from './channels';
import { EmitPostMessage } from './types';

export default function useBroadcastChannel(name: string) {
  const [ data, setDataEmiter ] = useState(null);

  const emit = (message: EmitPostMessage) => {
    setDataEmiter(data);
    emitMessageFromChannel({ name, message });
  };

  const subscribe = useCallback(( callback : (payload : any) => void ) => {
    callback(data);
  },[data]);

  useEffect(() => {
    const channel = getChannelByName(name);
    const handler = (ev : MessageEvent<any>) => {
      setDataEmiter(ev.data);
    }
    channel && channel.addEventListener('message', handler);
    return () => {
      channel && channel.removeEventListener('message', handler);
    };
  },[]);

  
  return {
    emit,
    subscribe,
  };
}