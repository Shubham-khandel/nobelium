import React, { useState } from "react";
import styles from "./navBar.module.css";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export function Nav() {
    const [show, setShow] = useState(true)
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navLeft}>
        <li>LOGO</li>
      </ul>
      {show?<>
        <ul className={styles.navMiddle}>
        <li>Home</li>
        <li>Service</li>
        <li>Contact</li>
        <li>About Us</li>
        <li className={styles.login}>LogIn</li>
        <li className={styles.signup}>SignUp</li>
      </ul></>:null}
        <button onClick={()=>setShow(!show)} className={styles.icon}><MoreHorizIcon/></button>
      
    </nav>
  );
}