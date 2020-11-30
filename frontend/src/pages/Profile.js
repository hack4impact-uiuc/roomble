import '../styles/Profile.css';
import React, { useEffect, useState } from "react";
import { Button, Icon, Image, Grid, Container, Popup} from 'semantic-ui-react'
import { callApi} from '../utils/api';

function Profile() {
  const [allValues, setAllValues] = useState([]);
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [major, setMajor] = useState();
  const [email, setEmail] = useState();
  const [housingType, setHousingType] = useState();
  const [shortDesc, setShortDesc] = useState();
  const [longDesc, setLongDesc] = useState();
  const [numRoomates, setNumRoomates] = useState();
  const [fbUsername, setfbUsername] = useState();
  const [igUsername, setigUsername] = useState();
  const [scUsername, setscUsername] = useState();
 //callApi().then(text=> setText(text));
 
 useEffect(() => {
  const getText = async () => {
  const data = await callApi();
  console.log(data);
  console.log(data[0]['year']);
  setName(data[0]['name']);
  setYear(data[0]['year']);
  setAge(data[0]['age']);
  setGender(data[0]['gender']);
  setMajor(data[0]['major']);
  setEmail(data[0]['email']);
  setHousingType(data[0]['housingType']);
  setShortDesc(data[0]['shortDesc']);
  setLongDesc(data[0]['longDesc']);
  setNumRoomates(data[0]['numRoomates']);
  setfbUsername("@" + data[0]['fbUsername'])
  setigUsername("@" + data[0]['igUsername'])
  setscUsername("@" + data[0]['scUsername'])
  if (data[0]['fbUsername'] == undefined) {
    setfbUsername("No Facebook")
  }
  if (data[0]['igUsername'] == undefined) {
    setigUsername("No Instagram")
  }
  if (data[0]['scUsername'] == undefined) {
    setscUsername("No Snapchat")
  }
  }
  getText();
 }, []);

  return (
    <div className = "profile-profilePageBackground">
   
    <div className = "profile-extraSpacing"> 
    <Popup content= {fbUsername} trigger={<Icon className = "profile-facebook" size='huge' name='facebook square' />} />
    <Popup content= {igUsername} trigger={<Icon className = "profile-insta" size='huge' name='instagram' />} />
    <Popup content= {scUsername} trigger={<Icon size='huge' className = "profile-snapchat" name='snapchat square' />} />
    <span className = "profile-editprofile"><button class="ui pink basic button">Edit Profile</button></span>
    </div>
    
    <div className = "profile-profilePic"><Image src='https://media-exp1.licdn.com/dms/image/C5603AQHBntQnGdcTZw/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=dzx44XwbsZM5uidft3zf8JuBePv0shMtTl_yHKDaG64' size='medium' circular /></div>

  <Grid columns='two' divided>
    <Grid.Row>
     
      <Grid.Column>
        <Icon size='huge' className = 'profile-pink' name='home'></Icon>
        <p1 className = "profilepage-heading">HOUSING</p1>
        <br></br>
        <p2 className ="profile-moveRight">{housingType}</p2>
      </Grid.Column>
   
      <Grid.Column> 
      <p1 className = 'profilepage-name'>{name}</p1>
        <br></br>
        <p2 className = 'profile-textbig'>{email}</p2>
        <br></br>
        <br></br>
        <Icon className = 'profilepage-green' size='small' name='circle'></Icon>
        <p1 className = 'profile-textbold'>looking for roommate</p1>
        <br></br>
        <br></br>
        <p1 className = 'profile-text'>{gender}</p1>
        <br></br>
        <p1 className = 'profile-text'>Age: {age}</p1>
     
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' className = "profile-pink" name='graduation cap'></Icon>
        <p1 className = "profilepage-heading">MAJOR</p1>
        <br></br>
        <p1 className ="profile-moveRight">{major}</p1>
        
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
    {shortDesc} 
    </p>
  </Container>
      </Grid.Column>
      <Grid.Column>
      <Icon size='huge' className = 'profile-pink' name='calendar alternate'></Icon>
        <p1 className = "profilepage-heading">YEAR</p1>
        <br></br>
  <p1 className ="profile-moveRight">{year}</p1>
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
        <p1 className ="profile-moveRight">{numRoomates}</p1>
        <br></br>
        <br></br>
        <button class="ui pink basic button">View Quiz</button>
      </Grid.Column>
      <Grid.Column>
      <Container>
    <p1 className = 'profile-descriptionheader'>LONG DESCRIPTION</p1>
    <p className = 'profile-description'>
    {longDesc}
    </p>
  </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>

    
    </div>
  );
}

export default Profile;