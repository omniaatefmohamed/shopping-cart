import React from 'react';
import { words } from './../../static-data';
import '../../css/Footer/Footer.css'

function Footer() {
    return (
        <div className="footer">{words.footerTitle}</div>
    )
}

export default Footer;
