import React, { Fragment } from 'react'
import { useState, useEffec, useRef } from 'react'
import styles from './Home.module.css'
import Section from '../../components/project-grid/Section'

// import images

import reactLogo from '../../components/project-grid/images/reactLogo.jpg'
import jsLogo from '../../components/project-grid/images/jsLogo.jpg'
import djangoLogo from '../../components/project-grid/images/djangoLogo.jpg'
import electronLogo from '../../components/project-grid/images/electronLogo.jpg'
import radimax from '../../components/project-section/images/radimax.png'
import animesearcher from '../../components/project-section/images/animesearcher.png'
import encoder from '../../components/project-section/images/encoder.png'
import charmanager from '../../components/project-section/images/charmanager.png'
import ecommerce from '../../components/project-section/images/ecommerce.png'
import todolist from '../../components/project-section/images/todolist.png'
import Profile_ES from '../../components/profile/Profile_ES'
import Project from '../../components/project-section/Project'
import Message from '../../components/message-box/Message'
import Future_ES from '../../components/future/Future_ES'

export default function Home_ES() {


    return (
    <Fragment>
    
        <div className={`${styles.body}`}>

                {/* <Navbar/> */}

                <div>
                    <Profile_ES/>
                </div>

                <div className={styles.sectionWrapper} id='projectNav'>

                    <div className={`${styles.reactBox} ${styles.area}`}>
                        <Section
                            title = 'Proyectos React'
                            url = {reactLogo}
                            href = 'reactTitle'
                        />
                    </div>

                    <div  className={`${styles.jsBox} ${styles.area}`}>
                        <Section
                            title = 'Proyectos en JS'
                            url = {jsLogo}
                            color = '#00d8ff'
                            href = 'jsTitle'
                        />
                    </div>

                    <div   className={`${styles.djangoBox} ${styles.area}`}>
                        <Section
                            title = 'Proyectos Django'
                            url = {djangoLogo}
                            color = '#00d8ff'
                            href = 'djangoTitle'
                        />
                    </div>

                    <div   className={`${styles.electronBox} ${styles.area}`}>
                        <Section
                            title = 'Proyectos  Electron'
                            url = {electronLogo}
                            color = '#00d8ff'
                            href = 'electronTitle'
                        />
                    </div>
                </div>
                
                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle} id='reactTitle'> Proyectos en React </h1>

                    <Project
                        name = 'Sitio de Ecommerce'
                        url = {ecommerce}
                        desc = 'Navega en busca de una laptop en esta pagina.'
                        shortdesc= 'Sitio de venta de laptops.'
                        btn= 'App en vivo'
                        link= 'https://vitoboos.github.io/ecommerceLaptop/'
                    />

                    <Project
                        name = 'Radimax'
                        url = {radimax}
                        desc = 'Una pagina para guiar nuevos clientes hacia un negocio.'
                        shortdesc = 'Pagina de contacto para radiografia dental.'
                        btn= 'App en vivo'
                        link= 'https://vitoboos.github.io/radimax/'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='jsTitle'> Proyectos en JS Puros </h1>

                    <Project
                        name = 'Buscador de Anime'
                        url = {animesearcher}
                        desc = 'Buscador de anime realizado con Jikan API, busca cualquier anime!.'
                        shortdesc= 'Un simple buscador de anime.'
                        btn= 'App en vivo'
                        link= 'https://vitoboos.github.io/animesearcher.github.io/HTML/home'
                    />

                    <Project
                        name = 'Codificador de mensajes'
                        url = {encoder}
                        desc = 'Realizado con expresiones regulares.'
                        shortdesc = 'Un simple codificador y decodificador de mensajes.'
                        btn= 'App en vivo'
                        link= 'https://vitoboos.github.io/encoder.github.io/main'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='djangoTitle'> Django Projects </h1>

                    <Project
                        name = 'Manejo de Personajes'
                        url = {charmanager}
                        desc = 'Crea y guarda personajes en una base de datos en Django.'
                        shortdesc= 'Creador de personajes inspirado en titulos de Fire Emblem GBA.'
                        btn= 'Codigo'
                        link='https://github.com/Vitoboos/charManager'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='electronTitle'> Electron Projects </h1>

                    <Project
                        name = 'Lista de que haceres'
                        url = {todolist}
                        desc = 'App de escritorio de productividad.'
                        shortdesc= 'Una lista de que haceres.'
                        btn= 'Codigo'
                        link='https://github.com/Vitoboos/discipline-app'
                    />

                </div>

            <Message
                title='Enviame un mensaje!'
                btn = 'Enviar'
            />

            <Future_ES/>

        </div>
    
    </Fragment>
    )
}
