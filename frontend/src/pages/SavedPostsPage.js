import './SavedPostsPage.css';
import React, { useEffect, useState } from "react";
import { Button, Card, Image, Icon, Dropdown, FeedExtra} from 'semantic-ui-react'
import { getLikedProfiles, likeProfile } from '../utils/api';

function SavedPostsPage() {
  const [data, setData] = useState([])
  const [profiles, setProfiles] = useState([])

  const loadSavedProfiles = async () => {
    const profiles = await getLikedProfiles();
    setProfiles(profiles)
  }

  const unlike = async (userId) => {
    await likeProfile(userId);
    await loadSavedProfiles();
  }

  useEffect(() => {
    loadSavedProfiles();

  }, []);

  return (
    <div class="page">
      <h1 class="title">Liked Profiles</h1>

      <div class="cards">
        <Card.Group itemsPerRow={3}>

          {profiles.map(profile => (

            <Card>
                <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />

                <Card.Content>
                  <Card.Header>{profile.name}</Card.Header>
                  <Card.Description>{profile.shortDesc}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div style={{columnCount: 1}}>
                    <Icon style={{float: "right"}} display="flex" class="heartButton" size="big" name="heart filled" color="pink" onClick = {() => unlike(profile._id)}/>
                  </div>
                </Card.Content>
            </Card>
          ))}
        
            <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                
              <Card.Content>
                <Card.Header>Test</Card.Header>
                <Card.Description>jsdflkdsjaf lksadjf lsakdfj lsakdfj asldkfj asdlkfj adslfk </Card.Description>
              </Card.Content>
              <FeedExtra>
                  <div style={{columnCount: 1}}>
                    <Icon style={{float: "right"}} display="flex" class="heartButton" size="big" name="heart filled" color="pink" onClick = {() => alert("hi")}/>
                  </div>
              </FeedExtra>
                
            </Card>
          </Card.Group>
          
      </div>
    </div>
  );
}

export default SavedPostsPage;
