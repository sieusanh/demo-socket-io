import React, { useState, useEffect } from 'react';
import { socket } from '@/tools/socket-io';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    socket.on('Server-sent-data', function (data) {
      console.log('Server-sent-data ', data);
    });
  }, []);
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    socket.timeout(500).emit('create-something', value, () => {
      setIsLoading(false);
    });

    // socket.emit('Client-sent-data', value);
  }

  return (
    <form onSubmit={ onSubmit }>

      <input onChange={ e => setValue(e.target.value) } />

      <button type="submit" disabled={ isLoading }>Submit</button>

    </form>
  );
}