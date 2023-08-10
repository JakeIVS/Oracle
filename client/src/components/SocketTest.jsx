import React, { useState } from 'react';
import { Socket, io } from 'socket.io-client';

function SocketTest() {
  const [returnVal, setReturnVal] = useState('');
  const socket = io('ws://localhost:5555');
  socket.emit('return_field', 6);
  socket.on('from_server', number => console.log(number));

  return (
    <div className="bg-primary pb-14">
      <p>Hello World, {returnVal}</p>
      <input type="text" onSubmit={handleSubmit} />
    </div>
  );
}

export default SocketTest;
