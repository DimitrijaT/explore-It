import '../css/Contact.css'
import React from "react";
import i18next, {t} from "i18next";
import {Cookies} from "react-cookie";

export class Contact extends React.Component {

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
        <div id="contact_main">
                <div id="short_desc">
                    <h2> {t("short_description_contact")} </h2>
                </div>
                <div id="contact_list">
                    <div className="member">
                        <p>Stefan Janevski</p>
                        <a href="mailto:stefan.janevski@students.finki.ukim.mk">stefan.janevski@students.finki.ukim.mk</a>
                    </div>
                    <div className="member">
                        <p>Maja Vuevska</p>
                        <a href="mailto:maja.vuevska@students.finki.ukim.mk">maja.vuevska@students.finki.ukim.mk</a>
                    </div>
                    <div className="member">
                        <p>Dimitrija Timeski</p>
                        <a href="mailto:dimitrija.timeski@students.finki.ukim.mk">dimitrija.timeski@students.finki.ukim.mk</a>
                    </div>
                    <div className="member">
                        <p>Rinor Ajdini</p>
                        <a href="mailto:rinor.ajdini@students.finki.ukim.mk">rinor.ajdini@students.finki.ukim.mk</a>
                    </div>
                    <div className="member">
                        <p>Andrej Bardakoski</p>
                        <a href="mailto:andrej.bardakoski@students.finki.ukim.mk">andrej.bardakoski@students.finki.ukim.mk</a>
                    </div>
                </div>
        </div>
        )
    }
}
