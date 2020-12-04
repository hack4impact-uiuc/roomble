import { Button, Checkbox, Form } from 'semantic-ui-react'
import { submitProfile } from "../utils/api";
import "../styles/Signup.css";
//import Select from 'react-select'
import React, { useEffect, useState } from "react";
import { Dropdown} from 'semantic-ui-react'

function SignupPage() {
  const contentAlign = {display:"flex", justifyContent:"center"}
  const inputAlign = {marginRight:"5%"}
  const [name, setName] = useState("");
  const [school, setSchool] = useState(""); //add dropdown
  const [year, setYear] = useState(""); //add dropdown
  const [age, setAge] = useState(0); 
  const [gender, setGender] = useState(""); //add dropdown
  const [major, setMajor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fbUsername, setFbUsername] = useState("");
  const [igUsername, setIgUsername] = useState("");
  const [scUsername, setScUsername] = useState("");
  const [email, setEmail] = useState("");
  const [housingType, setHousingType] = useState(""); //add dropdown
  const [numRoomates, setNumRoomates] = useState(0);
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [quizAnswers, setQuizAnswers] = useState([0, 0, 0, 0]);
  const yearOptions = [{key:"freshman", text:"Freshman", value:"freshman"},{key:"sophomore", text:"Sophomore", value:"sophomore"}, {key:"junior", text:"Junior", value:"junior"}, {key:"senior", text:"Senior", value:"senior"}, {key:"grad", text:"Grad", value:"grad"}];
  const genderOptions = [{key:"male", text:"Male", value:"male"},{key:"female", text:"Female", value:"female"}, {key:"non-binary", text:"Non-binary", value:"non-binary"}, {key:"other", text:"Other", value:"other"}];
  const housingOptions = [{key:"private", text:"Private", value:"private"},{key:"undergrad-dorms", text:"Undergrad Dorms", value:"undergrad-dorms"}, {key:"grad-dorms", text:"Grad Dorms", value:"grad-dorms"}, {key:"off-campus", text:"Off Campus", value:"off-campus"}];
  
  return (
    <div className="signupHome">
      <p class="signupHeader"> Create your profile</p>
        <div className="main">
          <Form>
          <Form.Field>
          <h2 class="signupHeader2" style={{marginTop:"3%"}}>Basic Information</h2>
          <div style={contentAlign}>
            <label className="labelStyle">Name*</label><input type="text" placeholder='First and Last' onChange={event => setName(event.target.value)} required/>
            <label className="labelStyle">School*</label><input style={inputAlign} type="text" placeholder='School' onChange={event => setSchool(event.target.value)} required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="labelStyle">Age*</label><input type="number" placeholder='18' onChange={event => setAge(event.target.value)} required/>
            <label className="labelStyle">Major*</label><input style={inputAlign} type="text" placeholder='Major' onChange={event => setMajor(event.target.value)} required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="labelStyle">Gender*</label>
            <div style={{width:"23%"}}>
            <Dropdown size placeholder='Gender' search selection options={genderOptions} onChange={(event, data) => setGender(data.value)} />
            </div>
            <label className="labelStyle" style={{marginLeft:"10%"}}>Year*</label>
            <div style={{width:"35%"}}>
            <Dropdown size placeholder='Year' search selection options={yearOptions} onChange={(event, data) => setYear(data.value)} />
            </div>
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="signupHeader2">Contact Information</h2>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Email*</label><input placeholder='Email' type="email" onChange={event => setEmail(event.target.value)} required/>
            <label className="labelStyle">FB</label><input placeholder='Username' onChange={event => setFbUsername(event.target.value)} />
            <label className="labelStyle">IG </label><input style={inputAlign} placeholder='Handle'onChange={event => setIgUsername(event.target.value)}  />
          </div>
          </Form.Field>
          <Form.Field>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Phone </label><input placeholder='xxx-xxx-xxxx' onChange={event => setPhoneNumber(event.target.value)} />
            <label className="labelStyle">Snapchat </label><input style={inputAlign} placeholder='Username' onChange={event => setScUsername(event.target.value)} />
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="signupHeader2">Build Your Profile</h2>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Housing Preference* </label>
            <div style={{width:"35%"}}>
         <Dropdown size placeholder='Housing' search selection options={housingOptions} onChange={(event, data) => setHousingType(data.value)} />
            </div>
            <label className="labelStyle"># of Roommates* </label><input type="number" style={inputAlign} placeholder='3' onChange={event => setNumRoomates(event.target.value)} required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="textLabelStyle" >Short Description* </label><input className="textAreaStyle" type="textarea" name="textValue" placeholder="Maximum of 75 words" onChange={event => setShortDesc(event.target.value)} required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="textLabelStyle"> Long Description </label><input className="textAreaStyle" type="textarea" name="textValue" placeholder="Optional Long Description" onChange={event => setLongDesc(event.target.value)} />
          </div>
          </Form.Field>
          <p id="buttonSubmit" style= {{textAlign:"center"}}><Button type='submit' onClick={event => submitProfile(name, school, year, parseInt(age), gender, major, phoneNumber, fbUsername, igUsername, scUsername, email, housingType, parseInt(numRoomates), shortDesc, longDesc, quizAnswers)}><span id="lab">Submit</span></Button></p>
          </Form>
        </div>
        <br></br>
        <br></br>
    </div>
  );
  
}

export default SignupPage;
