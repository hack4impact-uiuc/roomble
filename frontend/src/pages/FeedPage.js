import React, { useEffect, useState } from 'react';
import '../styles/FeedPage.css';
import {
  Card,
  Image,
  Button,
  Icon,
  Divider,
  FeedExtra,
  Checkbox,
  Dropdown,
  Popup,
} from 'semantic-ui-react';
import { getProfiles, loadProfile, getLikedProfiles, likeProfile} from '../utils/api';

import { Link } from 'react-router-dom';

function FeedPage() {
  const [filters, setFilters] = useState({
    gender: [],
    year: [],
    housingType: [],
    school: [],
    numRoommates: [1, 10],
    age: [16, 27],
  });
  const [profiles, setProfiles] = useState([]);
  const [vis, setVisibility] = useState('hidden');
  const [heartState, setHeartState] = useState("heart outline");
  const filter = async () => {
    const filtered = await getProfiles(filters);
    setProfiles(filtered);
  };

  useEffect(() => {
    filter();
  }, [filters]);
  const like = async (userId) => {
    await likeProfile(userId);
  }

  const collegeOptions = [
    { key: 'All', text: 'All', value: 'all' },
    { key: 'ACES', text: 'ACES', value: 'ACES' },
    { key: 'AHS', text: 'AHS', value: 'AHS' },
    { key: 'BUS', text: 'BUS', value: 'BUS' },
    { key: 'CIMED', text: 'CIMED', value: 'CIMED' },
    { key: 'COM', text: 'COM', value: 'COM' },
    { key: 'DGS', text: 'DGS', value: 'DGS' },
    { key: 'EDUC', text: 'EDUC', value: 'EDUC' },
    { key: 'ENG', text: 'ENG', value: 'ENG' },
    { key: 'FAA', text: 'FAA', value: 'FAA' },
    { key: 'LAS', text: 'LAS', value: 'LAS' },
    { key: 'LAW', text: 'LAW', value: 'LAW' },
    { key: 'LER', text: 'LER', value: 'LER' },
    { key: 'SSW', text: 'SSW', value: 'SSW' },
    { key: 'VetMed', text: 'VetMed', value: 'VetMed' },
  ];

  const determineSMAccount = (value) => {
    if (value != '') {
      return value;
    } else {
      return 'None';
    }
  };

  function refreshPage() {
    window.location.reload();
  }

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return (
    <div class='feedpage' style={{ display: 'flex' }}>
      <div style={{ marginLeft: '10px', position: 'fixed' }} id='filterDiv'>
        {' '}
        {/* When posiiton is fixed, it takes up no space so card elements are centered to middle of webpage. When fixed is remoed, card elements shift to the right since filter bar takes up space now */}
        <p id='filterButton'>
          <Button
            style={{ marginTop: '10px' }}
            onClick={() => {
              if (vis === 'hidden') {
                setVisibility('visible');
              } else {
                setVisibility('hidden');
              }
            }}
          >
            Filter
          </Button>{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button onClick={refreshPage} style={{ width: '100px' }}>
            <Icon name='refresh'></Icon>
          </Button>{' '}
        </p>
        <div
          style={{
            backgroundColor: 'white',
            width: '70%',
            borderRadius: '10px',
            visibility: vis,
            overflow: 'scroll',
          }}
        >
          <p
            style={{
              fontWeight: 'normal',
              fontSize: '10px',
              marginLeft: '15px',
            }}
          >
            Set browser zoom to 100% for best quality
          </p>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender</p>
          <div id='checkboxDiv'>
            <Checkbox
              id='female'
              label={{ children: 'Female' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    gender: [...filters.gender, 'female'],
                  });
                } else {
                  let removedFemale = filters.gender.filter((value) => {
                    return value != 'female';
                  });
                  setFilters({ ...filters, gender: removedFemale });
                }
                // loadProfiles();
              }}
            />
            <br></br>
            <Checkbox
              id='male'
              label={{ children: 'Male' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    gender: [...filters.gender, 'male'],
                  });
                } else {
                  let removedMale = filters.gender.filter((value) => {
                    return value != 'male';
                  });
                  setFilters({ ...filters, gender: removedMale });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='non-binary'
              label={{ children: 'Non-Binary' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    gender: [...filters.gender, 'non-binary'],
                  });
                } else {
                  let removedNB = filters.gender.filter((value) => {
                    return value != 'non-binary';
                  });
                  setFilters({ ...filters, gender: removedNB });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='other'
              label={{ children: 'Other' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    gender: [...filters.gender, 'other'],
                  });
                } else {
                  let removedOth = filters.gender.filter((value) => {
                    return value != 'other';
                  });
                  setFilters({ ...filters, gender: removedOth });
                }
              }}
            />
          </div>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Year</p>
          <div id='checkboxDiv'>
            <Checkbox
              id='freshman'
              label={{ children: 'Freshman' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    year: [...filters.year, 'freshman'],
                  });
                } else {
                  let removedFresh = filters.year.filter((value) => {
                    return value != 'freshman';
                  });
                  setFilters({ ...filters, year: removedFresh });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='sophomore'
              label={{ children: 'Sophomore' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    year: [...filters.year, 'sophomore'],
                  });
                } else {
                  let removedSoph = filters.year.filter((value) => {
                    return value != 'sophomore';
                  });
                  setFilters({ ...filters, year: removedSoph });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='junior'
              label={{ children: 'Junior' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({ ...filters, year: [...filters.year, 'junior'] });
                } else {
                  let removedJr = filters.year.filter((value) => {
                    return value != 'junior';
                  });
                  setFilters({ ...filters, year: removedJr });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='senior'
              label={{ children: 'Senior' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({ ...filters, year: [...filters.year, 'senior'] });
                } else {
                  let removedSr = filters.year.filter((value) => {
                    return value != 'senior';
                  });
                  setFilters({ ...filters, year: removedSr });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='grad'
              label={{ children: 'Grad' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({ ...filters, year: [...filters.year, 'grad'] });
                } else {
                  let removedGrad = filters.year.filter((value) => {
                    return value != 'grad';
                  });
                  setFilters({ ...filters, year: removedGrad });
                }
              }}
            />
          </div>
          <p>
            {' '}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School&nbsp;
            <span style={{ fontWeight: 'thinner', fontSize: '10px' }}>
              <a target='_blank' href='http://catalog.illinois.edu/schools/'>
                UIUC Academic Units Reference
              </a>
            </span>
          </p>
          <div id='checkboxDiv'>
            <div style={{ width: '35%' }}>
              <Dropdown
                size
                placeholder='School'
                search
                selection
                options={collegeOptions}
                onChange={(event, data) => {
                  if (data.value === 'all') {
                    setFilters({ ...filters, school: [] });
                  } else {
                    setFilters({ ...filters, school: [data.value] });
                  }
                }}
              />
            </div>
          </div>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Housing Type</p>
          <div id='checkboxDiv'>
            <Checkbox
              id='private'
              label={{ children: 'Private' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    housingType: [...filters.housingType, 'private'],
                  });
                } else {
                  let removePrivate = filters.housingType.filter((value) => {
                    return value != 'private';
                  });
                  setFilters({ ...filters, housingType: removePrivate });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='undergrad-dorms'
              label={{ children: 'Undergrad Dorms' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    housingType: [...filters.housingType, 'undergrad-dorms'],
                  });
                } else {
                  let removeUG = filters.housingType.filter((value) => {
                    return value != 'undergrad-dorms';
                  });
                  setFilters({ ...filters, housingType: removeUG });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='grad-dorms'
              label={{ children: 'Grad Dorms' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    housingType: [...filters.housingType, 'grad-dorms'],
                  });
                } else {
                  let removeGD = filters.housingType.filter((value) => {
                    return value != 'grad-dorms';
                  });
                  setFilters({ ...filters, housingType: removeGD });
                }
              }}
            />
            <br></br>
            <Checkbox
              id='off-campus'
              label={{ children: 'Off Campus' }}
              style={{ marginBottom: '10px' }}
              onChange={(event) => {
                if (event.target.checked) {
                  setFilters({
                    ...filters,
                    housingType: [...filters.housingType, 'off-campus'],
                  });
                } else {
                  let removeOC = filters.housingType.filter((value) => {
                    return value != 'off-campus';
                  });
                  setFilters({ ...filters, housingType: removeOC });
                }
              }}
            />
          </div>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age Range</p>
          <div id='checkboxDiv'>
            <p>
              <input
                type='number'
                min='16'
                max='27'
                style={{ width: '17%' }}
                placeholder='16'
                onChange={(event) => {
                    let newFilters = filters;
                    newFilters.age[0] = parseInt(event.target.value !== "" ? event.target.value : 16);
                    setFilters(newFilters);
                    filter();
                }}
              ></input>{' '}
              to &nbsp;
              <input
                type='number'
                min='16'
                max='27'
                style={{ width: '17%' }}
                placeholder='27'
                onChange={(event) => {
                    let newFilters = filters;
                    newFilters.age[1] = parseInt(event.target.value !== "" ? event.target.value : 27);
                    setFilters(newFilters);
                    filter();
                }}
              ></input>
            </p>
          </div>
          <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of Roommates </p>
          <div id='checkboxDiv'>
            <p>
              <input
                type='number'
                min='1'
                max='10'
                style={{ width: '17%' }}
                placeholder='1'
                onChange={(event) => {
                    let newFilters = filters;
                    newFilters.numRoommates[0] = parseInt(event.target.value !== "" ? event.target.value : 1);
                    setFilters(newFilters);
                    filter();
                }}
              ></input>{' '}
              to
              <input
                type='number'
                min='1'
                max='10'
                style={{ width: '17%' }}
                placeholder='10'
                onChange={(event) => {
                    let newFilters = filters;
                    newFilters.numRoommates[1] = parseInt(event.target.value !== "" ? event.target.value : 10);
                    console.log(newFilters.numRoommates[1]);
                    setFilters(newFilters);
                    filter();
                }}
              ></input>
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
        </div>
      </div>
      {/* ternary operator */}
      {profiles.length > 0 ? (
        <div style={{ margin: 'auto', marginTop: '115px' }}>
          {profiles.map((value) => (
            <Card.Group
              itemsPerRow={1}
              style={{
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <Card style={{ margin: 'auto', height: '100%', width: '700px' }}>
                {' '}
                {/* Width was originally 60%*/}
                <Card.Content>
                  <div style={{ columnCount: 2 }}>
                    <Card.Header
                      style={{
                        textAlign: 'left',
                        fontSize: '30px',
                        marginTop: '20px',
                        marginBottom: '5px',
                      }}
                    >
                      {value.name}
                    </Card.Header>
                    <div style={{ position: 'relative' }}>
                      <Icon
                        style={{ float: 'right' }}
                        size='huge'
                        name='circle outline'
                      />
                    </div>
                  </div>
                  <div style={{ display: 'block', float: 'left' }}>
                    {/* <a target="_blank" href={"https://www.facebook.com/" + value.fbUsername}> */}
                    <Popup
                      content={determineSMAccount(value.fbUsername)}
                      trigger={
                        <Icon
                          size='large'
                          name='facebook square'
                          className='profile-facebook'
                          data-inverted=''
                          data-position='top left'
                        />
                      }
                    />
                    {/* </a> */}
                    <a
                      target='_blank'
                      href={'https://www.instagram.com/' + value.igUsername}
                    >
                      <Popup
                        content={determineSMAccount(value.igUsername)}
                        trigger={
                          <Icon
                            size='large'
                            name='instagram'
                            className='profile-insta'
                          />
                        }
                      />
                    </a>
                    <Popup
                      content={determineSMAccount(value.scUsername)}
                      trigger={
                        <Icon
                          size='large'
                          name='snapchat'
                          className='profile-snapchat'
                          name='snapchat square'
                        />
                      }
                    />{' '}
                  </div>
                  <br></br>
                  <Divider></Divider>
                  <div style={{ height: '75px', fontSize: '17px' }}>
                    <Card.Description>{value.shortDesc}</Card.Description>
                  </div>
                  {/* style={{height: "500px", margin:"auto", display:"flex", justifyContent:"center" if we want to center images */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image
                      style={{ height: '500px' }}
                      src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-attends-the-62nd-annual-grammy-awards-at-news-photo-1602693189.jpg'
                    />
                    {/*Temporarily added this css so I can see if results of filter are accurate with card ifno*/}
                    <div id='FilterInfo'>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Age:</span>{' '}
                        {value.age}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Gender:</span>{' '}
                        {capitalize(value.gender)}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Year:</span>{' '}
                        {capitalize(value.year)}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>School:</span>{' '}
                        {value.school}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>Major:</span>{' '}
                        {value.major}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Housing Type:
                        </span>{' '}
                        {capitalize(value.housingType)}
                      </p>
                      <p>
                        <span style={{ fontWeight: 'bold' }}>
                          Roommates Wanted:
                        </span>{' '}
                        {value.numRoommates}
                      </p>
                    </div>
                  </div>
                  <FeedExtra>
                    <div style={{ columnCount: 1, marginTop: '15px' }}>
                      {/* <Button style={{display: "flex"}}>Chat</Button> */}
                      <Icon
                        style={{ float: 'right' }}
                        display='flex'
                        size='big'
                        name="heart outline"
                        color = "pink"
                        onClick = {() => like(value._id)}

                      />
                    </div>
                  </FeedExtra>
                </Card.Content>
              </Card>
            </Card.Group>
          ))}
        </div>
      ) : (
        <div
          style={{
            margin: 'auto',
            marginTop: '115px',
            width: '100%',
            backgroundImage:"linear-gradient(to bottom right, #056C89, #FF6F69, #ffcc5c);",
            // backgroundColor: 'black',
            height: '1000px',
          }}
        >
          <center>
            <p style={{ marginTop: '200px', color: 'white',fontWeight:"bold",fontSize:"45px" }}>
              {' '}
              No profiles found
            </p>
          </center>
        </div>
      )}
      {/* ternary operator */}
      <div style={{ position: 'fixed', marginLeft: '93%' }} id='filterButton'>
        <Link to='/feed'>
          <Button style={{ marginTop: '20px', width: '100px' }}>
            <Icon name='home'></Icon>
          </Button>
        </Link>
        <Link to='/profile'>
          <Button style={{ marginTop: '20px', width: '100px' }}>
            <Icon name='user'></Icon>
          </Button>
        </Link>
        <Link to='/saved-posts'>
          <Button style={{ marginTop: '20px', width: '100px' }}>
            <Icon name='heart'></Icon>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default FeedPage;
