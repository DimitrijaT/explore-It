import {Outlet, Link} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import '../css/NavBar.css'
import {t} from "i18next";
import {useEffect} from "react";

export const Navigation = () => {
    return (
        <>
        <nav>
            <p className="title">Explore IT</p>
            <div className="nav_buttons">
            <Link to="/">
                <Button bsPrefix="customBtn" variant="nav">
                    {t("home")}
                </Button>
                <Link to="/about">
                    <Button bsPrefix="customBtn" variant="nav">
                        {t("about")}
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button bsPrefix="customBtn" variant="nav">
                        {t("contact")}
                    </Button>
                </Link>
            </Link>
            </div>
            <div className="translate_section">
                <img src={require("../icons/translate_icons/mk.png")} className="country_flag" onClick={() => {
                    //TODO: Translate to MK
                }} alt={""}/>
                <img src={require("../icons/translate_icons/al.png")} className="country_flag" onClick={() => {
                    //TODO: Translate to AL
                }} alt={""}/>
                <img src={require("../icons/translate_icons/us.png")} className="country_flag" onClick={() => {
                    //TODO: Translate to EN
                }} alt={""}/>
            </div>
        </nav>

        <Outlet />
        </>
    )
}