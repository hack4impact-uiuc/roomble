import { Button, Checkbox, Form } from 'semantic-ui-react'
import { submitProfile } from "../utils/api";
import "../styles/Signup.css";
import React, { useEffect, useState } from "react";
import { Dropdown} from 'semantic-ui-react'

function SignupPage() {
  const contentAlign = {display:"flex", justifyContent:"center"}
  const inputAlign = {marginLeft:"0%"}
  const [name, setName] = useState("");
  const [school, setSchool] = useState(""); //add dropdown
  const [year, setYear] = useState(""); //add dropdown
  const [age, setAge] = useState(16); 
  const [gender, setGender] = useState(""); //add dropdown
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fbUsername, setFbUsername] = useState("");
  const [igUsername, setIgUsername] = useState("");
  const [scUsername, setScUsername] = useState("");
  const [email, setEmail] = useState("");
  const [housingType, setHousingType] = useState(""); //add dropdown
  const [numRoomates, setNumRoomates] = useState(1);
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [quizAnswers, setQuizAnswers] = useState([0, 0, 0, 0]);
  const yearOptions = [{key:"freshman", text:"Freshman", value:"freshman"},{key:"sophomore", text:"Sophomore", value:"sophomore"}, {key:"junior", text:"Junior", value:"junior"}, {key:"senior", text:"Senior", value:"senior"}, {key:"grad", text:"Grad", value:"grad"}];
  const genderOptions = [{key:"male", text:"Male", value:"male"},{key:"female", text:"Female", value:"female"}, {key:"non-binary", text:"Non-binary", value:"non-binary"}, {key:"other", text:"Other", value:"other"}];
  const housingOptions = [{key:"private", text:"Private", value:"private"},{key:"undergrad-dorms", text:"Undergrad Dorms", value:"undergrad-dorms"}, {key:"grad-dorms", text:"Grad Dorms", value:"grad-dorms"}, {key:"off-campus", text:"Off Campus", value:"off-campus"}];
  const collegeOptions = [{key:"ACES", text:"ACES", value:"ACES"}, {key:"AHS", text:"AHS", value:"AHS"}, {key:"BUS", text:"BUS", value:"BUS"}, {key:"CIMED", text:"CIMED", value:"CIMED"}, {key:"COM", text:"COM", value:"COM"}, {key:"DGS", text:"DGS", value:"DGS"}, {key:"EDUC", text:"EDUC", value:"EDUC"}, {key:"ENG", text:"ENG", value:"ENG"}, {key:"FAA", text:"FAA", value:"FAA"}, {key:"LAS", text:"LAS", value:"LAS"}, {key:"LAW", text:"LAW", value:"LAW"}, {key:"LER", text:"LER", value:"LER"}, {key:"SSW", text:"SSW", value:"SSW"}, {key:"VetMed", text:"VetMed", value:"VetMed"}];

  return (
    <div className="signupHome">
      <h1 class="SignUpHeader"> Create your profile</h1>
      <br></br>
      <br></br>
        <br></br>
        <div className="main">
          <Form>
          <Form.Field>
          <h2 class="SignUpHeader2" style={{marginTop:"3%"}}>Basic Information</h2>
          <div style={contentAlign}>
            <label className="LabelStyle">Name*</label><input type="text" placeholder='First and Last' onChange={event => setName(event.target.value)} required/>
            <label className="LabelStyle" style={{marginLeft:"10%"}}>School*</label>
            <div style={{width:"35%"}}>
            <Dropdown size placeholder='School' search selection options={collegeOptions} onChange={(event, data) => setSchool(data.value)} />
            </div>
            {/* <label className="labelStyle">School*</label><input style={inputAlign} type="text" placeholder='School' onChange={event => setSchool(event.target.value)} required/> */}
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="LabelStyle">Age*</label><input style={{marginLeft:"-2%"}}type="number" min="16" max="27" placeholder='18' onChange={event => setAge(event.target.value)} required/>
            <label className="LabelStyle">Major*</label><input style={inputAlign} type="text" placeholder='Major' onChange={event => setMajor(event.target.value)} required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="LabelStyle">Gender*</label>
            <div style={{width:"23%"}}>
            <Dropdown size placeholder='Gender' search selection options={genderOptions} onChange={(event, data) => setGender(data.value)} />
            </div>
            <label className="LabelStyle" style={{marginLeft:"12%"}}>Year*</label>
            <div style={{width:"35%"}}>
            <Dropdown size placeholder='Year' search selection options={yearOptions} onChange={(event, data) => setYear(data.value)} />
            </div>
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="SignUpHeader2">Contact Information</h2>
          <div style={{display:"flex"}}>
            <label className="LabelStyle">Email*</label><input placeholder='Email' type="email" onChange={event => setEmail(event.target.value)} required/>
            <label className="LabelStyle">FB</label><input placeholder='Username' onChange={event => setFbUsername(event.target.value)} />
            <label className="LabelStyle">IG </label><input style={inputAlign} placeholder='Handle'onChange={event => setIgUsername(event.target.value)}  />
          </div>
          </Form.Field>
          <Form.Field>
          <div style={{display:"flex"}}>
            <label className="LabelStyle">Phone </label><input placeholder='xxx-xxx-xxxx' onChange={event => setPhoneNumber(event.target.value)} />
            <label className="LabelStyle">Snapchat </label><input style={inputAlign} placeholder='Username' onChange={event => setScUsername(event.target.value)} />
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="SignUpHeader2">Build Your Profile</h2>
          <div style={{display:"flex"}}>
            <label className="LabelStyle">Housing Preference* </label>
            <div style={{width:"35%"}}>
         <Dropdown size placeholder='Housing' search selection options={housingOptions} onChange={(event, data) => setHousingType(data.value)} />
            </div>
            <label className="LabelStyle"># of Roommates* </label><input type="number" min="1" max="10" style={inputAlign} placeholder='1' onChange={event => setNumRoomates(event.target.value)} required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="TextLabelStyle" >Short Description* </label><textarea className="textAreaStyle" type="textarea" name="textValue" placeholder="Maximum of 75 words" onChange={event => setShortDesc(event.target.value)} required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="TextLabelStyle"> Long Description </label><textarea className="TextAreaStyle" type="textarea" name="textValue" placeholder="Optional Long Description" onChange={event => setLongDesc(event.target.value)} />
          </div>
          </Form.Field>
          <p id="button" style= {{textAlign:"center"}}><Button type='submit' onClick={event => submitProfile(name, school, year, parseInt(age), gender, major, phoneNumber, fbUsername, igUsername, scUsername, email, housingType, parseInt(numRoomates), shortDesc, longDesc, quizAnswers)}><span id="lab">Submit</span></Button></p>
          </Form>
        </div>
        <br></br>
        <br></br>
    </div>
  );
  
}

export default SignupPage;
