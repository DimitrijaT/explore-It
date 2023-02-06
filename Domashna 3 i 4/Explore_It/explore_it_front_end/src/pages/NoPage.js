import '../css/NoPage.css'
import React from "react";
import {t} from "i18next";

export class NoPage extends React.Component {
    render() {
        return (
            <div id="no_page_main">
                {
                    //TODO: 404 Page
                    t("")
                }
            </div>
        );
    }
}