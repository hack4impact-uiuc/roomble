import { Button, Checkbox, Form } from 'semantic-ui-react'
import "../styles/Signup.css";
//import Select from 'react-select'
import { Dropdown } from 'semantic-ui-react'

const languageOptions = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
]


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

  const contentAlign = {display:"flex", justifyContent:"center"}
  const inputAlign = {marginRight:"5%"}
  
function SignupPage() {
  return (
    <div class="homepage">
      <h1>Create your profile</h1>
        <div class="main">
          <br></br>
          <br></br>
          <Form>
          <br></br>
          <Form.Field>
          <h2 >Basic Info</h2>
          <div style={contentAlign}>
            <label class="labelStyle">Name*</label><input type="text" placeholder='First and Last' required/>
            <label class="labelStyle">School*</label><input style={inputAlign} type="text" placeholder='School' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label class="labelStyle">Age*</label><input type="number" placeholder='18' required/>
            <label class="labelStyle">Major*</label><input style={inputAlign} type="text" placeholder='Major' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <div style={contentAlign}>
            <label class="labelStyle">Gender*</label><input type="text" placeholder='Gender' required/>
            <label class="labelStyle">Year*</label><input style={inputAlign} type="text" placeholder='Year' required/>
          </div>
          </Form.Field>
          <Form.Field>
          <h2>Contact Information</h2>
          <div style={{display:"flex"}}>
            <label class="labelStyle">Email*</label><input placeholder='Email' type="email" required/>
            <label class="labelStyle">FB</label><input placeholder='Username' />
            <label class="labelStyle">IG </label><input style={inputAlign} placeholder='Handle' />
          </div>
          </Form.Field>
          <Form.Field>
          <div style={{display:"flex"}}>
            <label class="labelStyle">Phone </label><input placeholder='xxx-xxx-xxxx' />
            <label class="labelStyle">Snapchat </label><input style={inputAlign} placeholder='Username' />
          </div>
          </Form.Field>
          <Form.Field>
          <h2 >Build Your Profile</h2>
          <div style={{display:"flex"}}>
            <label class="labelStyle">Housing Preference* </label><input placeholder='Private' required/>
            <label class="labelStyle"># of Roommates* </label><input type="number" style={inputAlign} placeholder='3' required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label class="textLabelStyle" >Short Description* </label><input class="textAreaStyle" type="textarea" name="textValue" placeholder="Maximum of 75 words" required/>
          </div>
          <br></br>
          <div style={{display:"flex"}}>
            <label class="textLabelStyle"> Long Description </label><input class="textAreaStyle" type="textarea" name="textValue" placeholder="Optional Long Description"/>
          </div>
          </Form.Field>
          <Form.Field>
          <Checkbox /><span style={{color:"white"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I agree to the terms and conditions.</span>
          </Form.Field>
          <p style= {{textAlign:"center"}}><Button type='submit' style={{backgroundColor:"#C70039", color:"white", borderRadius:"0px",
          backgroundColor:"#C70039", fontSize:"20px", fontWeight:"5", textShadow: "2px 2px black"}}><span id="lab">Submit</span></Button></p>
          <br></br>
          </Form>
        </div>
    </div>
  );
}

export default SignupPage;
