import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../css/NavBar.css';
import i18next, {t} from 'i18next';
import {Cookies} from "react-cookie";

export class Navigation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: "mk"
        }
    }


    componentDidMount() {
        let tempCookie = new Cookies().get("lang");
        if (tempCookie === undefined) {
            new Cookies().set("lang", "mk");
            tempCookie = "mk";
        }
        this.translateTo(tempCookie);
    }

    translateTo(desiredLang) {
        if (this.state.language !== desiredLang) {
            i18next.changeLanguage(desiredLang).then(() => {
                this.setState({language: desiredLang})
                new Cookies().set("lang", desiredLang, {maxAge: 3600});

            });
        }
    }

    render() {
        return (
            <>
                <nav>
                    <div className="logo_title">
                        <Link to="/">
                            <img src={require("../logo.png")} alt="" id="logo"/>
                        </Link>
                        <p id="title">Explore IT</p>
                    </div>
                    <div className="nav_buttons">
                        <Link to="/">
                            <Button bsPrefix="customBtn" variant="nav">
                                {t('home')}
                            </Button>
                            <Link to="/about">
                                <Button bsPrefix="customBtn" variant="nav">
                                    {t('about')}
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button bsPrefix="customBtn" variant="nav">
                                    {t('contact')}
                                </Button>
                            </Link>
                        </Link>
                    </div>
                    <div className="translate_section">
                        <img
                            src={require('../icons/translate_icons/mk.png')}
                            className="country_flag"
                            onClick={() => {
                                this.translateTo("mk");
                                window.location.reload();
                            }}
                            alt=""
                        />
                        <img
                            src={require('../icons/translate_icons/al.png')}
                            className="country_flag"
                            onClick={() => {
                                this.translateTo("al");
                                window.location.reload();
                            }}
                            alt=""
                        />
                        <img
                            src={require('../icons/translate_icons/us.png')}
                            className="country_flag"
                            onClick={() => {
                                this.translateTo("en");
                                window.location.reload();
                            }}
                            alt=""
                        />
                    </div>
                </nav>

                <Outlet />
            </>
        );
    }
}