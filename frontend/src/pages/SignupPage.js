import { Button, Checkbox, Form } from 'semantic-ui-react'
import "../styles/Signup.css";
//import Select from 'react-select'
import { Dropdown } from 'semantic-ui-react'

  const contentAlign = {display:"flex", justifyContent:"center"}
  const inputAlign = {marginRight:"5%"}
  
function SignupPage() {
  return (
    <div className="signupHome">
      <p class="signupHeader"> Create your profile</p>
        <div className="main">
          <Form>
          <Form.Field>
          <h2 class="signupHeader2" style={{marginTop:"3%"}}>Basic Information</h2>
          <div style={contentAlign}>
            <label className="labelStyle">Name*</label><input type="text" placeholder='First and Last' required/>
            <label className="labelStyle">School*</label><input style={inputAlign} type="text" placeholder='School' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="labelStyle">Age*</label><input type="number" placeholder='18' required/>
            <label className="labelStyle">Major*</label><input style={inputAlign} type="text" placeholder='Major' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label className="labelStyle">Gender*</label><input type="text" placeholder='Gender' required/>
            <label className="labelStyle">Year*</label><input style={inputAlign} type="text" placeholder='Year' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="signupHeader2">Contact Information</h2>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Email*</label><input placeholder='Email' type="email" required/>
            <label className="labelStyle">FB</label><input placeholder='Username' />
            <label className="labelStyle">IG </label><input style={inputAlign} placeholder='Handle' />
          </div>
          </Form.Field>
          <Form.Field>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Phone </label><input placeholder='xxx-xxx-xxxx' />
            <label className="labelStyle">Snapchat </label><input style={inputAlign} placeholder='Username' />
          </div>
          </Form.Field>
          <Form.Field>
          <h2 class="signupHeader2">Build Your Profile</h2>
          <div style={{display:"flex"}}>
            <label className="labelStyle">Housing Preference* </label><input placeholder='Private' required/>
            <label className="labelStyle"># of Roommates* </label><input type="number" style={inputAlign} placeholder='3' required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="textLabelStyle" >Short Description* </label><input className="textAreaStyle" type="textarea" name="textValue" placeholder="Maximum of 75 words" required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label className="textLabelStyle"> Long Description </label><input className="textAreaStyle" type="textarea" name="textValue" placeholder="Optional Long Description"/>
          </div>
          </Form.Field>
          <p style= {{textAlign:"center"}}><Button type='submit' style={{backgroundColor:"#FF6F69", color:"white", borderRadius:"0px",
           fontSize:"20px", fontWeight:"5", textShadow: "1px 1px black"}}><span id="lab">Submit</span></Button></p>
          </Form>
        </div>
        <br></br>
        <br></br>
    </div>
  );
}

export default SignupPage;
