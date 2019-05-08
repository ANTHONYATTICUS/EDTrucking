import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import axios from "axios";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.jsx";

class SectionWork extends React.Component {
  constructor(){
    super()
    this.state={
      name: '',
      email: '',
      message:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  async handleSubmit(e){
    e.preventDefault()
    const { name, email, message} = this.state
    const inquiry = await axios.post('/api/inquiry', {
      name, 
      email, 
      message
    })
  }



    render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer onSubmit={this.handleSubmit} justify="center">
          <GridItem cs={12} sm={8} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
              Please list the details about your transport and or any other questions you may have. 
              We will responde get back to you in a couple of hours.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Name"
                    id="name"
                    onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    onChange={this.handleChange}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                  
                </GridItem>
                <CustomInput
                  labelText="Message"
                  id="message"
                  onChange={this.handleChange}
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridItem
                  xs={12}
                  sm={4}
                  md={4}
                  className={`${classes.mrAuto} ${classes.mlAuto}`}
                >
                  <Button color="primary">Submit</Button>
                </GridItem>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(SectionWork);
