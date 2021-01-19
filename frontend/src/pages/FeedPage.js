import React, { useEffect, useState } from "react";
import '../styles/FeedPage.css';
import { Card, Image, Button, Icon, Divider, FeedExtra, Checkbox, Dropdown, Popup } from 'semantic-ui-react'
import { getProfiles } from "../utils/api";
import { Link } from "react-router-dom";


function FeedPage() {
  const [filterGirl, setfilterGirl] = useState(false);
  const [filterBoy, setfilterBoy] = useState(false);
  const [filterNBI, setfilterNBI] = useState(false);
  const [filterOth, setfilterOth] = useState(false);
  const [filterFresh, setfilterFresh] = useState(false);
  const [filterSoph, setfilterSoph] = useState(false);
  const [filterJunior, setfilterJunior] = useState(false);
  const [filterSenior, setfilterSenior] = useState(false);
  const [filterGrad, setfilterGrad] = useState(false);
  const [filterPR, setfilterPR] = useState(false);
  const [filterUG, setfilterUG] = useState(false);
  const [filterGD, setfilterGD] = useState(false);
  const [filterOC, setfilterOC] = useState(false);
  const [schoolType, setSchool] = useState("All");
  const [minAge, setMinAge] = useState(16);
  const [maxAge, setMaxAge] = useState(27);
  const [minRoommates, setMinRoommates] = useState(1);
  const [maxRoommates, setMaxRoommates] = useState(10);
  const [profiles, setProfile] = useState([]);
  const [vis, setVisibility] = useState("hidden");
  useEffect(() => {
    const loadProfiles = async () => {
      const profiles = await getProfiles();
      setProfile(profiles);
    };
    loadProfiles();
  }, []);
  const collegeOptions = [{key:"All", text:"All", value:"All"}, {key:"ACES", text:"ACES", value:"ACES"}, {key:"AHS", text:"AHS", value:"AHS"}, {key:"BUS", text:"BUS", value:"BUS"}, {key:"CIMED", text:"CIMED", value:"CIMED"}, {key:"COM", text:"COM", value:"COM"}, {key:"DGS", text:"DGS", value:"DGS"}, {key:"EDUC", text:"EDUC", value:"EDUC"}, {key:"ENG", text:"ENG", value:"ENG"}, {key:"FAA", text:"FAA", value:"FAA"}, {key:"LAS", text:"LAS", value:"LAS"}, {key:"LAW", text:"LAW", value:"LAW"}, {key:"LER", text:"LER", value:"LER"}, {key:"SSW", text:"SSW", value:"SSW"}, {key:"VetMed", text:"VetMed", value:"VetMed"}];
  
  const determineSMAccount = (value) => {
    if (value != "") {
      return value;
    } else {
      return "None";
    }
  }

  const filter = async () => {
    const filtered = await getProfiles({gender: ['female', 'male'], year: ['freshman']})
    console.log(filtered)
    setProfile(filtered)
  }

  // const filterGender = (values) => {
  //   if (filterGirl == false && filterBoy == false && filterNBI == false && filterOth == false) {
  //     return values;
  //   }
  //   return values.filter(filterG).filter(filterB).filter(filterNB).filter(filterO);
  // }

  // const filterG = (value) => {
  //   if (filterGirl == false) {
  //     return value.gender != "female";
  //   }
  //   return value;
  // }

  // const filterB = (value) => {
  //   if (filterBoy == false) {
  //     return value.gender != "male";
  //   }
  //   return value;
  // }

  // const filterNB = value => {
  //   if (filterNBI == false) {
  //     return value.gender != "non-binary";
  //   }
  //   return value;
  // }

  // const filterO = value => {
  //   if (filterOth == false) {
  //     return value.gender != "other";
  //   }
  //   return value;
  // }

  // const filterYear= (values) => {
  //   if (filterFresh == false && filterSoph == false && filterJunior == false && filterSenior == false && filterGrad == false) {
  //     return values;
  //   }
  //   return values.filter(filterFr).filter(filterSo).filter(filterJr).filter(filterSr).filter(filterGr);
  // }

  // const filterFr = (value) => {
  //   if (filterFresh == false) {
  //     return value.year != "freshman";
  //   }
  //   return value;
  // }

  // const filterSo = (value) => {
  //   if (filterSoph == false) {
  //     return value.year != "sophomore";
  //   }
  //   return value;
  // }

  // const filterJr = value => {
  //   if (filterJunior == false) {
  //     return value.year != "junior";
  //   }
  //   return value;
  // }

  // const filterSr = value => {
  //   if (filterSenior == false) {
  //     return value.year != "senior";
  //   }
  //   return value;
  // }

  // const filterGr = value => {
  //   if (filterGrad == false) {
  //     return value.year != "grad";
  //   }
  //   return value;
  // }

  // const filterHousing = (values) => {
  //   if (filterPR == false && filterUG == false && filterGD == false && filterOC == false) {
  //     return values;
  //   }
  //   return values.filter(filterP).filter(filterU).filter(filterGd).filter(filterOc);
  // }

  // const filterP = value => {
  //   if (filterPR == false) {
  //     return value.housingType != "private";
  //   }
  //   return value;
  // }

  // const filterU = value => {
  //   if (filterUG == false) {
  //     return value.housingType != "undergrad-dorms";
  //   }
  //   return value;
  // }

  // const filterGd = value => {
  //   if (filterGD == false) {
  //     return value.housingType != "grad-dorms";
  //   }
  //   return value;
  // }

  // const filterOc = value => {
  //   if (filterOC == false) {
  //     return value.housingType != "off-campus";
  //   }
  //   return value;
  // }

  // function filterBySchool(value) {
  //   if (schoolType === "All") {
  //     return value;
  //   }
  //   return value.school === schoolType;
  // }

  // function filterByRoommates(value) {
  //   if (Number.isNaN(minRoommates) == true && Number.isNaN(maxRoommates) == true) {
  //     setMinRoommates(1);
  //     setMaxRoommates(10);
  //   }
  //   if (Number.isNaN(minRoommates)) {
  //     setMinRoommates(1);
  //   }
  //   if (Number.isNaN(maxRoommates)) {
  //     setMaxRoommates(10);
  //   }
  //   return value.numRoomates >= minRoommates && value.numRoomates <= maxRoommates;
  // }

  // function filterByAge(value) {
  //   if (Number.isNaN(minAge) == true && Number.isNaN(maxAge) == true) {
  //     setMinAge(16);
  //     setMaxAge(27);
  //   }
  //   if (Number.isNaN(minAge)) {
  //     setMinAge(16);
  //   }
  //   if (Number.isNaN(maxAge)) {
  //     setMaxAge(27);
  //   }
  //   return value.age >= minAge && value.age <= maxAge;
    
  // }

  function refreshPage(){ 
    window.location.reload(); 
}

  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  
  return (
    <div class="feedpage" style={{display:'flex'}}>
      <div style={{marginLeft:"10px", position:"fixed"}} id="filterDiv"> {/* When posiiton is fixed, it takes up no space so card elements are centered to middle of webpage. When fixed is remoed, card elements shift to the right since filter bar takes up space now */}
       <p id="filterButton"><Button style={{marginTop:"10px"}} onClick = {() => {
        if (vis === "hidden") {
          setVisibility("visible");
        } else {
          setVisibility("hidden");
        }
        }}>Filter</Button> &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={ refreshPage } style={{width:"100px"}}><Icon name="refresh"></Icon></Button> </p>
       <div style={{backgroundColor:"white", width:"70%", borderRadius:"10px", visibility:vis, overflow:"scroll"}}>
        <p style={{fontWeight:"normal", fontSize:"10px", marginLeft:"15px"}}>Set browser zoom to 100% for best quality</p>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gender</p>
         <div id = "checkboxDiv">
         <Checkbox label={{ children: "Female"}} style={{marginBottom:"10px"}} value={filterGirl} onChange={event => setfilterGirl(!filterGirl)} />
         <br></br>
         <Checkbox label={{ children: "Male"}} style={{marginBottom:"10px"}} value={filterBoy} onChange={event => setfilterBoy(!filterBoy)}/>
         <br></br>
         <Checkbox label={{ children: "Non-Binary"}} style={{marginBottom:"10px"}} value={filterNBI} onChange={event => setfilterNBI(!filterNBI)}/>
         <br></br>
         <Checkbox label={{ children: "Other"}} style={{marginBottom:"10px"}} value={filterOth} onChange={event => setfilterOth(!filterOth)}/>
         </div>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Year</p>
         <div id = "checkboxDiv">
         <Checkbox label={{ children: "Freshman"}} value={filterFresh} onChange={event => setfilterFresh(!filterFresh)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Sophomore"}} value={filterSoph} onChange={event => setfilterSoph(!filterSoph)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Junior"}} value={filterJunior} onChange={event => setfilterJunior(!filterJunior)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Senior"}} value={filterSenior} onChange={event => setfilterSenior(!filterSenior)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Grad"}} value={filterGrad} onChange={event => setfilterGrad(!filterGrad)} style={{marginBottom:"10px"}}/>
         </div>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;School&nbsp;<span style={{fontWeight:"thinner", fontSize:"10px"}}><a target="_blank" href = "http://catalog.illinois.edu/schools/">UIUC Academic Units Reference</a></span></p>
         <div id = "checkboxDiv">
         <div style={{width:"35%"}}>
            <Dropdown size placeholder='School' search selection options={collegeOptions} onChange={(event, data) => setSchool(data.value)}/>
          </div>
         </div>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Housing Type</p>
         <div id = "checkboxDiv">
         <Checkbox label={{ children: "Private"}} value={filterPR} onChange={event => setfilterPR(!filterPR)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Undergrad Dorms"}} value={filterUG} onChange={event => setfilterUG(!filterUG)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Grad Dorms"}} value={filterGD} onChange={event => setfilterGD(!filterGD)} style={{marginBottom:"10px"}}/>
         <br></br>
         <Checkbox label={{ children: "Off Campus"}} value={filterOC} onChange={event => setfilterOC(!filterOC)} style={{marginBottom:"10px"}}/>
         </div>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age Range</p>
         <div id = "checkboxDiv">
         <p><input type="number" min="16" max="27" style={{width:"17%"}} placeholder="16" onChange={event => setMinAge(parseInt(event.target.value))}></input> to <input type="number" min="16" max="27" style={{width:"17%"}} placeholder="27" onChange={event => setMaxAge(parseInt(event.target.value))}></input></p>
         </div>
         <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Number of Roommates</p>
         <div id = "checkboxDiv">
         <p><input type="number" min="1" max="10" style={{width:"17%"}} placeholder="1" onChange={event => setMinRoommates(parseInt(event.target.value))}></input> to <input type="number" min="1" max="10" style={{width:"17%"}} placeholder="10" onChange={event => setMaxRoommates(parseInt(event.target.value))}></input></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
         {/* <p><input type="number" min="1" style={{width:"17%"}} placeholder="1"/> to <input min="1"  type="number" style={{width:"17%"}}  placeholder="10"/></p> */}
         </div>

       </div>
      </div>
      <div style={{margin:'auto', marginTop:"115px"}}>
       {filterHousing(filterYear(filterGender(profiles))).filter(filterBySchool).filter(filterByRoommates).filter(filterByAge).map(value => 
        <Card.Group itemsPerRow={1} style ={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}>
          <Card style={{margin: "auto", height: "100%", width: "700px"}}>  {/* Width was originally 60%*/}
              <Card.Content>
                <div style={{columnCount: 2}}>
                  <Card.Header style={{textAlign: "left", fontSize: "30px", marginTop: "20px", marginBottom: "5px"}}>{value.name}</Card.Header>
                  <div style={{position: "relative"}}>
                    <Icon style={{float: "right"}} size="huge"  name="circle outline" />
                  </div>
                </div>
                <div style={{display: "block", float: "left"}}>
                  {/* <a target="_blank" href={"https://www.facebook.com/" + value.fbUsername}> */}
                    <Popup content= {determineSMAccount(value.fbUsername)} trigger={<Icon size= "large" name="facebook square" className = "profile-facebook" data-inverted="" data-position="top left" />} />
                  {/* </a> */}
                  <a target="_blank" href={"https://www.instagram.com/" + value.igUsername}>
                    <Popup content= {determineSMAccount(value.igUsername)} trigger={<Icon size= "large" name="instagram" className = "profile-insta" />}/>
                  </a>
                    <Popup content= {determineSMAccount(value.scUsername)} trigger={<Icon size= "large" name="snapchat" className = "profile-snapchat" name='snapchat square'/>}/>                </div>
                <br></br>
                <Divider></Divider>
                <div style={{height: "75px", fontSize:"17px"}}>
                  <Card.Description>{value.shortDesc}</Card.Description>
                </div>
                {/* style={{height: "500px", margin:"auto", display:"flex", justifyContent:"center" if we want to center images */}
                <div style={{display:"flex", justifyContent:"center"}}>
                <Image style={{height: "500px"}} src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ariana-grande-attends-the-62nd-annual-grammy-awards-at-news-photo-1602693189.jpg"/>
               {/*Temporarily added this css so I can see if results of filter are accurate with card ifno*/}
                <div id="FilterInfo">
                  <p><span style={{fontWeight:"bold"}}>Age:</span> {value.age}</p>
                  <p><span style={{fontWeight:"bold"}}>Gender:</span> {capitalize(value.gender)}</p>
                  <p><span style={{fontWeight:"bold"}}>Year:</span> {capitalize(value.year)}</p>
                  <p><span style={{fontWeight:"bold"}}>School:</span> {value.school}</p>
                  <p><span style={{fontWeight:"bold"}}>Major:</span> {value.major}</p>
                  <p><span style={{fontWeight:"bold"}}>Housing Type:</span> {capitalize(value.housingType)}</p>
                  <p><span style={{fontWeight:"bold"}}>Roommates Wanted:</span> {value.numRoomates}</p>
                </div>
                </div>
                <FeedExtra>
                  <div style={{columnCount: 1, marginTop: "15px"}}>
                    {/* <Button style={{display: "flex"}}>Chat</Button> */}
                    <Icon style={{float: "right"}} display="flex" size="big" name="heart outline"/>
                  </div>
                </FeedExtra>
              </Card.Content>
          </Card>
        </Card.Group>
      )}
      </div>
      <div style={{position:"fixed", marginLeft:"93%"}} id="filterButton">
        <Link to="/feed"><Button style={{marginTop:"20px", width:"100px"}}><Icon name="home" ></Icon></Button></Link>
        <Link to="/profile"><Button style={{marginTop:"20px", width:"100px"}}><Icon name="user"></Icon></Button></Link>
        <Link to="/saved-posts"><Button style={{marginTop:"20px", width:"100px"}}><Icon name="heart"></Icon></Button></Link>
      </div>
    </div>
  );
}

export default FeedPage;
