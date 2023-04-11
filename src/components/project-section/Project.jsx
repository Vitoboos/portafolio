import React from 'react'
import styles from './Project.module.css'

export default function Project(props) {

    function gotoLink(){
        window.open(props.link)
    }

return (

    <div className={styles.wrapper}>

        <img src={props.url}/>

        <div>
            <h1 className={styles.name}> {props.name} </h1>
            <p className={styles.shortdesc}> {props.shortdesc}</p>
            <p className={styles.desc}> {props.desc} </p>
            <button className={styles.btn} onClick={gotoLink}> {props.btn} </button>
        </div>


    </div>

)
}
