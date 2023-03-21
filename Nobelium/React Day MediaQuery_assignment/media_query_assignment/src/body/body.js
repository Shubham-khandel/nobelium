import React from "react"
import styles from './body.module.css'


export function Body(){
    return(
        <div className={styles.container}>
            <div className={styles.rightSide}>
                <p>Tottaly Free</p>
                <h1>Lets bring your team together in one click</h1>
                <p>We help you manage all of your work</p>
                <button>Get Started</button>
            </div>
            <div className={styles.leftSide}>
                <img src="https://media.istockphoto.com/id/1059661424/photo/mature-mixed-race-business-man.jpg?s=612x612&w=0&k=20&c=UAVBeyoD_LkCh1MzVaWW1SR1iwK-VkPDXWMH2o2wL8M="/>
            </div>
        </div>
    )
}