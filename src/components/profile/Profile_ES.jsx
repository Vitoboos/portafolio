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
                    <h1 className={`${styles.tab}`}> Proyectos </h1>
                    <img className={styles.projects} src={projects} alt='Projects'/>
                </div>

                <div className={styles.btn} onClick={toMsg}>
                    <h1 className={`${styles.tab}`}> Contactame! </h1>
                    <img className={styles.contact} src={contact} alt='Contact me!'/>
                </div>
                
                <div className={styles.btn} onClick={toFuture}>
                    <h1 className={`${styles.tab}`}> Futuro... </h1>
                    <img className={styles.future} src={future} alt='Future...'/>
                </div>
            </div>

            <div className={styles.data}>
                <div className={styles.bio}>

                    <div className={styles.presentation}>
                        <img className={styles.portrait} src={portrait} /> 
                        <h1 className={styles.greetings}> Saludos, soy Victor </h1>
                        <p className={styles.occupation}> Desarrollador Junior de Front-End </p>
                    </div>


                    <p className={styles.description}>

                        Estoy bien versado en el desarrollo Front-End y he trabajado con framewroks como React y Django, tengo experiencia lidiando con Python y
                        construyendo aplicaciones de escritorio con Tkinter, Electron y .NET.
                        Soy un lider natural, mediador y trabajador apasionado que disfruta resolver problemas y aprender nuevas habilidades.
                        Mis hobbies incluyen leer historia y jugar videojuegos.
                    </p>
                </div>

                <div className={styles.contacts}>

                    <h2 className={styles.title}> Encuentrame! </h2>

                    <ul className={styles.linktree}>
                        <li className={styles.link} onClick={github}> GitHub </li>
                        <li className={styles.link} onClick={linkedin}> LinkedIn </li>
                    </ul>
                </div>
            </div>

        </div>
    
    
    )
}
