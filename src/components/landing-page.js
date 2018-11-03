import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

// images being used
import detectImg from '../assets/images/image1.jpg';
import registerImg from '../assets/images/image2.jpg';
import galleryImg from '../assets/images/gallery-img.jpg';

import { Grid, Row, Col } from 'react-flexbox-grid';

// material-ui components
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class LandingPage extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={12} md={12} style={{ 'textAlign': 'center' }}>
                        <h1 className="margin-top-10">Demo for Bangalore Police</h1>
                        <br />
                        <p>Sentinel Identiti allows officers to enroll the faces of criminals and repeat offenders <br /> from the field and cross match the face with the crime database within seconds.</p>
                        <p><b>Register. Identify. Within Seconds.</b></p>
                        <br />
                    </Col>
                </Row>
                <Row>
                    {/* <Col md={1}>
                    </Col> */}
                    <Col xs={12} mdOffset={2} md={4} style={{ 'textAlign': 'center' }}>

                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={detectImg} alt="detect" />
                            </CardMedia>
                            <CardTitle title="Recognize Face" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <Link to={'/recognize'}><FlatButton className='flat-btn' label="RECOGNIZE" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <div className="padding-10"/>
                    <Col xs={12} md={4} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={registerImg} alt="register" />
                            </CardMedia>
                            <CardTitle title="Register Face" />
                            <CardText>
                            </CardText>
                            <CardActions>
                                <Link to={'/register'}><FlatButton className='flat-btn' label="REGISTER" /></Link>
                            </CardActions>
                        </Card>
                    </Col>
                    <div className="padding-10"/>

                    {/* <Col xs={12} md={3} style={{ 'textAlign': 'center' }}>
                        <Card>
                            <CardMedia
                            >
                                <img className='landingImage' src={galleryImg} alt="gallery-face" />
                            </CardMedia>
                            <CardTitle title="Face Gallery" />
                            <CardText>
                                Deprecated for now due to API call limit
                            </CardText>
                            <CardActions>
                                <Link to={'/gallery'}><FlatButton className='flat-btn' label="GALLERY" /></Link>
                                <FlatButton className='flat-btn' label="GALLERY" />
                            </CardActions>
                        </Card>
                    </Col> */}
                </Row>
            </Grid>
        );
    }
}

export default LandingPage;