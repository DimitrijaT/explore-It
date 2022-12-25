import React from 'react';
import '../css/About.css';
import i18next, {t} from "i18next";
import {Cookies} from "react-cookie";

export class About extends React.Component {

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

        if (this.state.language !== tempCookie) {
            i18next.changeLanguage(tempCookie).then(() => {
                this.setState({language: tempCookie})
                new Cookies().set("lang", tempCookie, {maxAge: 3600});
            });
        }
    }

    render() {
        return (
            <div id="about_main">
                    <div id="short_desc">
                        {t("short_description_about")}
                    </div>
                    <div id="github">
                        <img id="github_logo" src={require("../icons/github_text_logo.png")} onClick={() => {
                            window.open("https://github.com/DimitrijaT/Explore_It", "_blank")
                        }}/>
                    </div>

            </div>
        );
    }
}
