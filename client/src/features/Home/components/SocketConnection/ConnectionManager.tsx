import { useState, useEffect } from 'react';
// import { socket } from '@/tools/socket-io';
import { socket } from '@/tools/socket-io';

export function ConnectionManager() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<any[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      setFooEvents(previous => [...previous, value]);
      // setFooEvents(fooEvents.concat(value));
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  useEffect(() => {
    function onFooEvent(value: any) {
      setFooEvents(fooEvents.concat(value));
    }

    socket.on('foo', onFooEvent);

    return () => {
      socket.off('foo', onFooEvent);
    };
  }, [fooEvents]);
  

  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}