import '../styles/FeedPage.css';
//import { callApi } from '../utils/api';
import { Card, CardContent, Image, Button, Icon, Divider, FeedLike, FeedExtra, Feed } from 'semantic-ui-react'

function FeedPage() {

  /*
  const [, ] = useState([]);
  useEffect(() => {
    const demoCall = async () => {
      const items = await callApi();
      setItem();
    };
    demoCall();
  }, []);
  */

  return (
    <div class="feedpage">
      <Card style={{margin: "auto", height: "80%", width: "40%"}}>
          <Card.Content>
            <div style={{columnCount: 2}}>
              <Card.Header style={{textAlign: "left", fontSize: "30px", marginTop: "20px", marginBottom: "5px"}}>Name</Card.Header>
              <div style={{position: "relative"}}>
                <Icon style={{float: "right"}} size="huge"  name="circle outline" />
              </div>
            </div>
            <Divider></Divider>
            <div style={{height: "100px"}}>
              <Card.Description>Short Description</Card.Description>
            </div>
            <div style={{display: "block", float: "right"}}>
              <Icon size= "large" name="facebook square" />
              <Icon size= "large" name="instagram" />
              <Icon size= "large" name="snapchat" />
            </div>
            <Image style={{height: "500px", width: "100%", marginTop: "15px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-attends-the-62nd-annual-grammy-awards-at-news-photo-1602693189.jpg"/>
            
            <FeedExtra>
              <div style={{columnCount: 2, marginTop: "15px"}}>
                <Button style={{display: "flex"}}>Chat</Button>
                <Icon style={{float: "right"}} display="flex" size="big" name="heart outline"/>
              </div>
            </FeedExtra>
          </Card.Content>
      </Card>
      
    </div>
  );
}

export default FeedPage;
