import React from 'react'
import { words } from './../../static-data';
import '../../css/Header/Header.css'

function Header() {
    return (
        <div class="header">
            {words.headerTitle}
        </div>
    )
}

export default Header;