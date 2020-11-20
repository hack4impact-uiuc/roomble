import '../styles/Profile.css';
import { Button, Icon, Image, Grid, Container} from 'semantic-ui-react'

function Profile() {
  return (
    <div>
    <div className = "editprofile"> <Button >Edit Profile</Button> </div>
    <div><Icon size='huge' name='facebook square' />
   
    <Icon size='huge' name='instagram' />
    <Icon size='huge' name='snapchat square' />
    </div>
    
    <div className = "profilePic"> <Image src='https://media-exp1.licdn.com/dms/image/C5603AQHBntQnGdcTZw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=dzx44XwbsZM5uidft3zf8JuBePv0shMtTl_yHKDaG64' size='medium' circular /></div>

  <Grid columns='two' divided>
    <Grid.Row>
      <Grid.Column>
        <Icon size='huge' name='home'></Icon>
        <p1>Housing</p1>
        <br></br>
        <p2 className ="moveRight">University Housing</p2>
      </Grid.Column>
      <Grid.Column>
      <p1>Brandon Wang</p1>
        <br></br>
        <p2>brandonwang@illinois.edu</p2>
        <br></br>
        <br></br>
        <Icon size='small' name='circle'></Icon>
        <p1>looking for roommate;)</p1>
        <br></br>
        <p1>He/Him/His</p1>
        <br></br>
        <p1>Age: 18</p1>
     
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' name='graduation cap'></Icon>
        <p1>Major</p1>
        <br></br>
        <p1 className ="moveRight">Computer Science</p1>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
      <Container>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. 
    </p>
  </Container>
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' name='calendar alternate'></Icon>
        <p1>Year</p1>
        <br></br>
        <p1 className ="moveRight">Freshman</p1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
      <Container>
    <p>
    Optional longer Description
    </p>
  </Container>
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' name='users'></Icon>
        <p1>Number of Roommates</p1>
        <br></br>
        <p1 className ="moveRight">1</p1>
        <br></br>
        <br></br>
        <Button>View Quiz</Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    
    </div>
  );
}

export default Profile;