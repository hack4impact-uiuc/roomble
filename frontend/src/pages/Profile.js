import '../styles/Profile.css';
import React, { useEffect, useState } from "react";
import { Button, Icon, Image, Grid, Container} from 'semantic-ui-react'
import { callApi} from '../utils/api';

function Profile() {
  const [allValues, setAllValues] = useState([]);
  
 //callApi().then(text=> setText(text));
 
 useEffect(() => {
  const getText = async () => {
  const data = await callApi();
  console.log(data);
  console.log(data[0]['year']);
  
  setAllValues([data[0]['name'], data[0]['year'], data[0]['age'], data[0]['gender'], data[0]['major'], data[0]['email'], data[0]['housingType'], data[0]['shortDesc'], data[0]['longDesc'], data[0]['numRoomates']])
  //await makePost();
  }
  getText();
 }, []);

  return (
    <div className = "profile-profilePageBackground">
   
    <div className = "profile-extraSpacing"> 
      <Icon className = "profile-facebook" size='huge' name='facebook square' />
   
    <Icon className = "profile-insta" size='huge' name='instagram' />
    <Icon size='huge' className = "profile-snapchat" name='snapchat square' />
    <span className = "profile-editprofile"><button class="ui pink basic button">Edit Profile</button></span>
    </div>
    
    <div className = "profile-profilePic"><Image src='https://media-exp1.licdn.com/dms/image/C5603AQHBntQnGdcTZw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=dzx44XwbsZM5uidft3zf8JuBePv0shMtTl_yHKDaG64' size='medium' circular /></div>

  <Grid columns='two' divided>
    <Grid.Row>
     
      <Grid.Column>
        <Icon size='huge' className = 'profile-pink' name='home'></Icon>
        <p1 className = "profilepage-heading">HOUSING</p1>
        <br></br>
        <p2 className ="profile-moveRight">{allValues[6]}</p2>
      </Grid.Column>
   
      <Grid.Column> 
      <p1 className = 'profilepage-name'>{allValues[0]}</p1>
        <br></br>
        <p2 className = 'profile-textbig'>{allValues[5]}</p2>
        <br></br>
        <br></br>
        <Icon className = 'profilepage-green' size='small' name='circle'></Icon>
        <p1 className = 'profile-textbold'>looking for roommate</p1>
        <br></br>
        <br></br>
        <p1 className = 'profile-text'>{allValues[3]}</p1>
        <br></br>
        <p1 className = 'profile-text'>Age: {allValues[2]}</p1>
     
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' className = "profile-pink" name='graduation cap'></Icon>
        <p1 className = "profilepage-heading">MAJOR</p1>
        <br></br>
        <p1 className ="profile-moveRight">{allValues[4]}</p1>
        
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
      <Container>
    <p1 className = 'profile-descriptionheader'>SHORT DESCRIPTION</p1>
    <br></br>
    <p className = 'profile-description'>
    {allValues[7]} 
    </p>
  </Container>
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' className = 'profile-pink' name='calendar alternate'></Icon>
        <p1 className = "profilepage-heading">YEAR</p1>
        <br></br>
  <p1 className ="profile-moveRight">{allValues[1]}</p1>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <br></br>
        <br></br>
        <br></br>
      <Icon size='huge' className = 'profile-pink' name='users'></Icon>
        <p1 className = "profilepage-heading">NUMBER OF ROOMMATES</p1>
        <br></br>
        <p1 className ="profile-moveRight">{allValues[9]}</p1>
        <br></br>
        <br></br>
        <button class="ui pink basic button">View Quiz</button>
      </Grid.Column>
      <Grid.Column>
      <Container>
    <p1 className = 'profile-descriptionheader'>LONG DESCRIPTION</p1>
    <p className = 'profile-description'>
    {allValues[8]}
    </p>
  </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    
    </div>
  );
}

export default Profile;