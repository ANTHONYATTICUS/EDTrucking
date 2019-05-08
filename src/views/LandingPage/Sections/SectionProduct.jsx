import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/productStyle.jsx";
import Image from 'material-ui-image'
class SectionProduct extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={8} md={12}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              Ed's Transportation is proud to deliver the best strategic logistics solutions to help
              lower overall transportation costs, improve efficiency and meet deadlines to keep business
              moving forward. We take pride in guarenteeing faster transit times to all of our clients. We
              have established partnerships with top transportation providers to bring you the flexibility
              of multiple carriers without the headache or hassle. Our customer service team is available
              24/7 to make sure all of your projects and shipments keep moving smoothly.
            </h5>
            
          </GridItem>
        </GridContainer>
        
        {/* <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Free Chat"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Verified Users"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Fingerprint"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div> */}
      </div>
    );
  }
}

export default withStyles(productStyle)(SectionProduct);
