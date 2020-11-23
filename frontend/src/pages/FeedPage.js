import React, { useEffect, useState } from "react";
import '../styles/FeedPage.css';

import { Card, CardContent, Image, Button, Icon, Divider, FeedExtra } from 'semantic-ui-react'
import { getProfiles } from "../utils/api";

function FeedPage() {

  const [ profiles, setProfile] = useState([]);
  useEffect(() => {
    const demoCall = async () => {
      const profiles = await getProfiles();
      setProfile();
    };
    demoCall();
  }, []);

  return (
    <div class="feedpage">
      {profiles.map(value =>
        <Card style={{margin: "auto", height: "80%", width: "40%"}}>
            <Card.Content>
              <div style={{columnCount: 2}}>
                <Card.Header style={{textAlign: "left", fontSize: "30px", marginTop: "20px", marginBottom: "5px"}}>{value.name}</Card.Header>
                <div style={{position: "relative"}}>
                  <Icon style={{float: "right"}} size="huge"  name="circle outline" />
                </div>
              </div>
              <Divider></Divider>
              <div style={{height: "100px"}}>
                <Card.Description>{value.shortDesc}</Card.Description>
              </div>
              <div style={{display: "block", float: "right"}}>
                <a href="">
                  <Icon size= "large" name="facebook square" />
                </a>
                <a href="">
                  <Icon size= "large" name="instagram" />
                </a>
                <a href="">
                  <Icon size= "large" name="snapchat" />
                </a>
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
      )}
    </div>
  );
}

export default FeedPage;
