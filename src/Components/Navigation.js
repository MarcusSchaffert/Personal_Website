import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {useTransition, animated} from 'react-spring'

function Navigation() {
    const [show_menu, set_show_menu] = useState(false)


  return (
    <nav style={{ top:0, left:0}}>
        <span>
            <FontAwesomeIcon
                icon ={faBars}
                onClick={() => set_show_menu(!show_menu)}
            />
        </span>
    </nav>
  );
}

export default Navigation;