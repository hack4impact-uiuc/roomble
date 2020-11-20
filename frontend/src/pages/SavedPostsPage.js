import './SavedPostsPage.css';
import { Button, Card, Image, Icon} from 'semantic-ui-react'

function SavedPostsPage() {
  return (
    <div class="page">
      <h1 class="title">Saved Posts</h1>

      <div class="cards">
        <Card.Group itemsPerRow={3}>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              {/*<Card.Meta>Joined in 2015</Card.Meta>*/}
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
              {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
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
              {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
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
              {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
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
              {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
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
              {/*<Card.Meta>Joined in 2016</Card.Meta>*/}
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
          
        </Card.Group> 

      </div>
    </div>
  );
}

export default SavedPostsPage;
