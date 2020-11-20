import '../styles/Home.css';
import { Button } from 'semantic-ui-react'

function Home() {
  return (
    <div class="homepage">
      <h1>Roomble</h1>
      <h2>Get ready to ROOM-ble!!!</h2>
      <Button size='massive'>Log In</Button>
      <br />
      <br/>
      <Button size='massive'>Sign Up</Button>
    </div>
  );
}

export default Home;
