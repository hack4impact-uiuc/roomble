import './SavedPostsPage.css';
import React, { useEffect, useState } from "react";
import { Button, Card, Image, Icon} from 'semantic-ui-react'
import { callApi, getProfiles, getLikedProfiles} from '../utils/api';

const yourProfileId = "5fadf6bba3e3324e794a1141"

function SavedPostsPage() {
  const [data, setData] = useState([])
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const getData = async () => {
      //const data = await getProfiles();
      const profiles = await getLikedProfiles(yourProfileId);
      //setData(data);
      setProfiles(profiles)
      //console.log(data);
      console.log(profiles);
    }
    getData();
  
  }, []);

  return (
    <div class="page">
      <h1 class="title">Liked Profiles</h1>

      <div class="cards">
        <Card.Group itemsPerRow={3}>

          {profiles.map(profile => (
            /*<Card
              header={profile.name}
              image="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              description={profile.shortDesc}
            />*/
            
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
          {/*
          
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                95%
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Description>
                Daniel is a comedian living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                55%
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Description>
                Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                65%
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Description>
                Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                65%
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Description>
                Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                65%
              </a>
            </Card.Content>
          </Card>

          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Daniel</Card.Header>
              <Card.Description>
                Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='check circle' />
                65%
              </a>
            </Card.Content>
          </Card>*/}
          
          </Card.Group>

      </div>
    </div>
  );
}

export default SavedPostsPage;
