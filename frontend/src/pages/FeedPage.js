import React, { useEffect, useState } from "react";
import '../styles/FeedPage.css';

import { Card, Image, Popup, Icon, Divider, FeedExtra } from 'semantic-ui-react'
import { getProfiles } from "../utils/api";
import { getLikes } from "../utils/api";

function FeedPage() {

  const [ profiles, setProfile] = useState([]);
  useEffect(() => {
    const loadProfiles = async () => {
      const profiles = await getProfiles();
      setProfile(profiles);
    };
    loadProfiles();
  }, []);

  const [ likes, setLike] = useState([]);
  useEffect(() => {
    const loadLikes = async () => {
      const likes = await getLikes();
      setLike(likes);
    };
    loadLikes();
  }, []);

  function clickLike() {
    //toggle(<Icon className="heart" name="heart"></Icon>);
  }

  return (

   <div class="feedpage">
      {profiles.map(value =>
        <Card.Group className="cardGroup" itemsPerRow={1} >
          <Card className="card" style={{width: "80%", marginLeft: "auto", marginRight: "auto", marginTop: "1%", marginBottom: "1%", boxShadow: "0 0 2px #000000"}}>
            <Card.Content>
              <div style={{columnCount: 2}}>
                <Card.Header className="cardHeader">{value.name}</Card.Header>
                <Divider></Divider>

                <div style={{height: "670px"}}>
                  <Card.Description>{value.shortDesc}</Card.Description>
                </div>

                <div style={{columnCount: 3}}>
                  <div className="icons">
                    <a href="">
                      <Popup content={value.fbUsername} trigger={<Icon size= "huge" name="facebook square" />} />
                    </a>
                  </div>

                  <div className="icons">
                    <a href="">
                      <Popup content={value.igUsername} trigger={<Icon size= "huge" name="instagram" color="pink"/>} />
                    </a>
                  </div>

                  <div className="icons">
                    <a href="">
                      <Popup content={value.scUsername} trigger={<Icon size= "huge" name="snapchat" color="yellow"/>} />
                    </a>
                  </div>
                </div>

                <div style={{position:"relative"}}>
                  <Image className="image" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-attends-the-62nd-annual-grammy-awards-at-news-photo-1602693189.jpg" />
                  <Icon className="heart" display="flex" size="big" name="heart" color="white" onClick=""></Icon>
                </div>

              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      )}
    </div>
  );
}

export default FeedPage;
