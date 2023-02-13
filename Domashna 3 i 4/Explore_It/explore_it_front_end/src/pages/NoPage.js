import '../css/NoPage.css'
import React from "react";
import i18next, {t} from "i18next";
import {Cookies} from "react-cookie";

export class NoPage extends React.Component {
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

        setTimeout(() => {
            document.location.href = '/';
        }, 3000)
    }

    render() {
        return (
            <div id="no_page_main">
                    <h1>{t("page_404")}</h1>
                    <h4>{t("redirecting_404")}</h4>
            </div>
        );
    }
}