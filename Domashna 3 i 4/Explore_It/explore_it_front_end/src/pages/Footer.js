import React from 'react';
import '../css/Footer.css';

export class Footer extends React.Component {

    render() {
        const year = new Date().getFullYear();
        console.log(this.props.mp);
        return <footer>{`Copyright © Explore IT, ${year}`}</footer>;
    }
}