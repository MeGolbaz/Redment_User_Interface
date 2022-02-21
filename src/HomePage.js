import React, { useEffect, useState } from 'react';
import './App.css';
import { Container, List, GridRow, GridColumn, Grid, Image, Button, Header, Segment, Card } from 'semantic-ui-react';
import personaImage from "../src/Persona.png";
import googleLogo from "../src/googleLogo.png";
import microsoftLogo from "../src/microsoftLogo.png";
import slackLogo from "../src/slackLogo.png";
import upworkLogo from "../src/upworkLogo.png";
import layout from "../src/layout.png";
import square from "../src/square.png";
import verified from "../src/verified.png";
import HeaderMenu from './HeaderMenu';




function HomePage() {

  return (
    <>
      <div className="displayTop" style={{}} vertical>
        <Container>
          <Grid centered columns='equal'>
            <HeaderMenu />
          </Grid>
          <Grid>
            <Grid.Row columns={2}>
              <GridColumn className="mobileScreen" mobile='16' largeScreen={8} textAlign='left'>
                <Header className="headerTwo" as='h4'>100% TRUSTED PLATFORM</Header>
                <Header className="headerOne" as='h1'>Best Way To<br></br> Make Online<br></br> Payments.</Header>
                <Header className="headerThree" as='h6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua.</Header>
                <Button className="buttonTry">Try it free</Button>
              </GridColumn>
              <GridColumn mobile='16' largeScreen={8}>
                <GridRow>
                  <Image size='huge' src={personaImage} />
                </GridRow>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <Segment className="logoBar" textAlign='center' horizontal pilled>
        <List horizontal>
          <List.Item>
            <Image className="companyLogo" size='small' src={googleLogo} />
          </List.Item>
          <List.Item>
            <Image className="companyLogo" size='small' src={microsoftLogo} />
          </List.Item>
          <List.Item>
            <Image className="companyLogo" size='small' src={slackLogo} />
          </List.Item>
          <List.Item>
            <Image className="companyLogo" size='small' src={upworkLogo} />
          </List.Item>
        </List>
      </Segment>

      <Grid centered>
        <Grid.Row>
          <div>
            <Header className='bestTextStyle' as='h1'>Best Payment Service For <br></br>Your Transaction</Header>
          </div>
        </Grid.Row>
        <Grid.Row >
          <Card.Group className='cardsContainer' stackable>
            <Card className="firstCard">
              <Card.Content>
                <Image
                  className='iconStyle'
                  size='mini'
                  src={verified}
                />
                <Card.Header style={{ color: "white" }} >Security Guaranteed</Card.Header>
                <Card.Description style={{ color: "white" }} >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <a style={{ color: "white" }}>
                    <u>Read more</u>
                  </a>
                </div>
              </Card.Content>
            </Card>
            <Card className='otherCards'>
              <Card.Content>
                <Image
                  className='iconStyle'
                  size='mini'
                  src={layout}
                />
                <Card.Header>All in one Untibank App</Card.Header>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <a>
                    <u>Read more</u>
                  </a>
                </div>
              </Card.Content>
            </Card>
            <Card className='otherCards'>
              <Card.Content>
                <Image
                  className='iconStyle'
                  size='mini'
                  src={square}
                />
                <Card.Header>Free transaction fee</Card.Header>
                <Card.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div>
                  <a>
                    <u>Read more</u>
                  </a>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Row>
      </Grid>
    </>
  );
}

export default HomePage;
