import LPCon from '../imgs/LPCon.gif';



const GameRoom = () => {
    return (
      <section id="game-room" style={{ height: '100vh', padding: '50px', textAlign: 'center' }}>
        <h2>Game Room</h2>
        <img src={LPCon} alt="3D Gif" className="stack-image" style={{ width: '300px', height: 'auto' }} />

        <a href="/game-room-page" style={{ color: 'blue', textDecoration: 'underline' }}>
          Enter Game Room
        </a>
      </section>
    );
  };
  
  export default GameRoom;
  