import '../styles/Home.css';
import {Link} from "react-router-dom"
import { Button } from 'semantic-ui-react'

function Home() {
  return (
    <div class="homepage">
      <h1 class="hp-header" >Roomble</h1>
      <h2 class="hp-subheader">Get ready to ROOM-ble!!!</h2>
      <Button size='massive'>
        <Link to="/login">Log In</Link>
      </Button>
      <br />
      <br />
      <Button size='massive'>
        <Link to="/createProfile">Sign Up</Link>
      </Button>
    </div>
  );
}

export default Home;
