import { useState } from 'react'
import './App.css';
import io from "socket.io-client";
import Chat from './Chat';

const socket = io.connect("http://localhost:3001")
function App() {
  const [userName, setuserName] = useState("")
  const [room, setRoom] = useState("")

  const joinRoom = () => {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room)

    }
  }

  return (
    <div className="App">
      <div className='joinChatContainer'>
        <h2>join chats</h2>
        <input type="text" placeholder="name..." onChange={e => setuserName(e.target.value)} />
        <input type="text" placeholder="id..." onChange={e => setRoom(e.target.value)} />
        <button onClick={joinRoom}>Join ROom</button>
      </div>
      <Chat socket={socket} username={userName} room={room} />
    </div>
  );
}

export default App;
