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

const divStyle = {
    display:"flex",
    width: "60%",
    margin:"auto",
    backgroundColor:"black",
    border:"3px #C70039 outset",
    borderRadius : "15px",
    justifyContent:"center"
  };
  const labelStyle = {
    color:"white", 
    fontSize:"16px",
    backgroundColor:"#C70039",
    width:"48%",
    marginBottom:"15px",
    textShadow: "2px 2px black",
    fontWeight:"5",
    marginRight:"5%",
    marginLeft:"5%"
  }
  const contentAlign = {display:"flex", justifyContent:"center"}

  const inputAlign = {marginRight:"5%"}
  
function SignupPage() {
  return (
    <div class="homepage">

      <h1 style={{color:"#C70039"}}>Create your profile</h1>
      <div style={divStyle} class="main">
      <Form>
      <Form.Field>
      <h2 style={{color:"white", fontStyle:"italic", marginTop:"5%"}}>Basic Information</h2>
      <div style={contentAlign}>
      <label style={labelStyle}>Name*</label><input type="text" placeholder='First and Last' required/>
      <label style={labelStyle}>School*</label><input style={inputAlign} type="text" placeholder='School' required/>
      </div>
      
    </Form.Field>
    <Form.Field>
      <div style={contentAlign}>
      <label style={labelStyle}>Age*</label><input type="number" placeholder='18' required/>
      <label style={labelStyle}>Major*</label><input style={inputAlign} type="text" placeholder='Major' required/>
      </div>
    </Form.Field>
    <Form.Field>
    <div style={contentAlign}>
      <label style={labelStyle}>Gender*</label><input type="text" placeholder='Gender' required/>
      <label style={labelStyle}>Year*</label><input style={inputAlign} type="text" placeholder='Year' required/>
      </div>

    </Form.Field>
    <Form.Field>
    <h2 style={{color:"white", fontStyle:"italic", marginTop:"5%"}}>Contact Information</h2>
        <div style={{display:"flex"}}>
       <label style={labelStyle}>Email*</label><input placeholder='Email' type="email" required/>
       <label style={labelStyle}>FB</label><input placeholder='Username' />
       <label style={labelStyle}>IG </label><input style={inputAlign} placeholder='Handle' />
        </div>
    </Form.Field>
    <Form.Field>
    <div style={{display:"flex"}}>
       <label style={labelStyle}>Phone </label><input placeholder='xxx-xxx-xxxx' />
       <label style={labelStyle}>Snapchat </label><input style={inputAlign} placeholder='Username' />
    </div>
    </Form.Field>
    <Form.Field>
    <h2 style={{color:"white", fontStyle:"italic", marginTop:"5%"}}>Build Your Profile</h2>
    <div style={{display:"flex"}}>
       <label style={labelStyle}>Housing Preference* </label><input placeholder='Private' required/>
       <label style={labelStyle}># of Roommates* </label><input type="number" style={inputAlign} placeholder='3' required/>
    </div>
    <br></br>
    <div style={{display:"flex"}}>
    <label style={{color:"white", fontSize:"16px", backgroundColor:"#C70039", height:"20%", textShadow: "2px 2px black", fontWeight:"5", marginRight:"10%", marginLeft:"5%", width:"25%"}}>Short Description* </label><input type="textarea" name="textValue" placeholder="Maximum of 75 words" style={{height:"75px", width:"300px", marginRight:"5%"}} required/>
    </div>
    <br></br>
    <div style={{display:"flex"}}>
    <label style={{color:"white", fontSize:"16px", backgroundColor:"#C70039", height:"20%", textShadow: "2px 2px black", fontWeight:"5", marginRight:"10%", marginLeft:"5%", width:"25%"}}>Long Description </label><input type="textarea" name="textValue" placeholder="Optional Long Description" style={{height:"125px", width:"300px", marginRight:"5%"}}/>
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
