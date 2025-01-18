import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket || !inputRef.current) {
      return;
    }
    const message = inputRef.current.value;
    socket.send(message);
    inputRef.current.value = '';
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage = (ev: MessageEvent<string>) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
