import '../css/Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();

    return <footer>{`Copyright © Stefan Janevski, ${year}`}</footer>;
};
