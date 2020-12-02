import './SavedPostsPage.css';
import React, { useEffect, useState } from "react";
import { Button, Card, Image, Icon, Dropdown} from 'semantic-ui-react'
import { getLikedProfiles } from '../utils/api';

const yourProfileId = "5fadf6bba3e3324e794a1141"


function SavedPostsPage() {
  const [data, setData] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const loadSavedProfiles = async () => {
      const profiles = await getLikedProfiles(yourProfileId);
      setProfiles(profiles)
      console.log(profiles);
    }
    loadSavedProfiles();
  
  }, []);

  return (
    <div class="page">
      <h1 class="title">Liked Profiles</h1>

      <div class="cards">
        <Card.Group itemsPerRow={3}>

          {profiles.map(profile => (

            <Card>
                <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{profile.name}</Card.Header>
                  <Card.Description>{profile.shortDesc}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='check circle'/>65%
                  </a>
                </Card.Content>
            </Card>
          ))}

          </Card.Group>

      </div>
    </div>
  );
}

export default SavedPostsPage;
