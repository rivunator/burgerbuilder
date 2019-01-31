import React from 'react';
import hamburgerIcon from '../../../assets/images/mobile-menu.png'

const Hamburger = (props) => (
    <div >
        <img src={hamburgerIcon} onClick={props.clicked} style={{ height: props.heigth }} />
    </div >
)

export default Hamburger;