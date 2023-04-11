import React from 'react'
import { useState } from 'react'
import styles from './Profile.module.css'

import projects from './images/projects.png'
import contact from './images/contact.png'
import future from './images/future.png'
import portrait from './images/portrait.png'

export default function Profile() {


    function toProjects(){
        let nav = document.getElementById('projectNav')
        nav.scrollIntoView(({
            behavior: "smooth",
            block: "end",
            inline: "center"
        }))
    }

    function toMsg(){
        let nav = document.getElementById('msgBox')
        nav.scrollIntoView(({
            behavior: "smooth",
            block: "end",
            inline: "center"
        }))
    }

    
    function toFuture(){
        let nav = document.getElementById('futureTitle')
        nav.scrollIntoView(({
            behavior: "smooth",
            block: "start",
            inline: "end"
        }))
    }

    function github(){
        window.open('https://github.com/Vitoboos')
    }

    function email(){
        window.open('https://github.com/Vitoboos')
    }

    function discord(){
        window.open('https://github.com/Vitoboos')
    }

    function linkedin(){
        window.open('https://www.linkedin.com/in/victor-antonio-guaipo-mendoza-727016272/')
    }

    return (

        <div className={styles.wrapper}>

            <div className={`${styles.shortcuts} ${styles.sticky}`}>
                <div className={styles.btn} onClick={toProjects}>
                    <h1 className={`${styles.tab}`}> Projects </h1>
                    <img className={styles.projects} src={projects} alt='Projects'/>
                </div>

                <div className={styles.btn} onClick={toMsg}>
                    <h1 className={`${styles.tab}`}> Contact me! </h1>
                    <img className={styles.contact} src={contact} alt='Contact me!'/>
                </div>
                
                <div className={styles.btn} onClick={toFuture}>
                    <h1 className={`${styles.tab}`}> Future... </h1>
                    <img className={styles.future} src={future} alt='Future...'/>
                </div>
            </div>

            <div className={styles.data}>
                <div className={styles.bio}>

                    <div className={styles.presentation}>
                        <img className={styles.portrait} src={portrait} /> 
                        <h1 className={styles.greetings}> Greetings, I'm Victor </h1>
                        <p className={styles.occupation}> Junior Front-End Developer </p>
                    </div>


                    <p className={styles.description}>
                        I am well versed in front-end development and have worked with frameworks such as React and Django, I have experience dealing with Python and building
                        desktop apps with Tkinter, Electron and .NET.
                        I am a natural leader, mediator, passionate worker who enjoys problem solving and learning new skills.
                        My hobbies include reading history and playing videogames.
                    </p>
                </div>

                <div className={styles.contacts}>

                    <h2 className={styles.title}> Find me! </h2>

                    <ul className={styles.linktree}>
                        <li className={styles.link} onClick={github}> GitHub </li>
                        <li className={styles.link} onClick={linkedin}> LinkedIn </li>
                    </ul>
                </div>
            </div>

        </div>
    
    
    )
}
