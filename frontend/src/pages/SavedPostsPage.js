import './SavedPostsPage.css';
import React, { useEffect, useState } from "react";
import { Button, Card, Image, Icon, Dropdown} from 'semantic-ui-react'
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
                {/*<Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />*/}
                <Icon.Group size='huge'>
                  <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                  <Icon class="heart" corner="bottom right" name='heart' color='pink'/>
 
                </Icon.Group>
                <Card.Content>
                  <Card.Header>{profile.name}</Card.Header>
                  <Card.Description>{profile.shortDesc}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                      <Button compact basic floated='right' onClick = {() => unlike(profile._id)}>
                        <Icon size='small' class="other" name='heart outline' color='purple'/>
                      </Button>
                  </Card.Content>
            </Card>
          ))}
          {/*
            <Card>
                  <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>
                      Hey 
                    </Card.Header>
                    <Card.Description>Hey fjlsdkf dsjlfk sdalfkj sadlfkj asdlfkj sadlfkj sadlfkjas dlfkjasd flkjdsa </Card.Description>
                  </Card.Content>

              </Card>*/}
          </Card.Group>
          
      </div>
    </div>
  );
}

export default SavedPostsPage;
