import React, { Fragment } from 'react'
import { useState} from 'react'
import styles from './Home.module.css'
import Section from '../../components/project-grid/Section'

import { Link } from 'react-router-dom'


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
import Canvas from '../../components/canvas/Canvas'
import Profile from '../../components/profile/Profile'
import Project from '../../components/project-section/Project'
import Message from '../../components/message-box/Message'
import Future from '../../components/future/Future'

import spain from './spain.webp'

export default function Home() {


    const [visibility, setVisibility] = useState(styles.hidden)
    const [renderBg, setBg] = useState(styles.active)
    const canvas = React.useRef()

    function displayBody(){
        setVisibility(styles.active)
        setBg(styles.hidden)
        console.log(canvas.current)
    }

    return (
    <Fragment>
    
        <div className={`${styles.canvasBox} ${renderBg}`}>

            <Canvas/>

            <button className={styles.displayBtn} onClick={displayBody}> View </button> 

            <Link to={'/es'}>
                <img className={styles.gotoEsp} src={spain} alt=''/>
            </Link>

        </div>

        <div className={`${styles.body} ${visibility}`}>

                {/* <Navbar/> */}

                <div>
                    <Profile/>
                </div>

                <div className={styles.sectionWrapper} id='projectNav'>

                    <div className={`${styles.reactBox} ${styles.area}`}>
                        <Section
                            title = 'React Projects'
                            url = {reactLogo}
                            href = 'reactTitle'
                        />
                    </div>

                    <div  className={`${styles.jsBox} ${styles.area}`}>
                        <Section
                            title = 'Pure JS Projects'
                            url = {jsLogo}
                            color = '#00d8ff'
                            href = 'jsTitle'
                        />
                    </div>

                    <div   className={`${styles.djangoBox} ${styles.area}`}>
                        <Section
                            title = 'Django Projects'
                            url = {djangoLogo}
                            color = '#00d8ff'
                            href = 'djangoTitle'
                        />
                    </div>

                    <div   className={`${styles.electronBox} ${styles.area}`}>
                        <Section
                            title = 'Electron Projects'
                            url = {electronLogo}
                            color = '#00d8ff'
                            href = 'electronTitle'
                        />
                    </div>
                </div>
                
                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle} id='reactTitle'> React Projects </h1>

                    <Project
                        name = 'Ecommerce Site'
                        url = {ecommerce}
                        desc = 'Browse for a new laptop in this simple ecommerce website.'
                        shortdesc= 'Laptop ecommerce website'
                        btn= 'Live App'
                        link= 'https://vitoboos.github.io/ecommerceLaptop/'
                    />

                    <Project
                        name = 'Radimax'
                        url = {radimax}
                        desc = 'Guide new customers through the services and locations.'
                        shortdesc = 'Contact website for dental radiography.'
                        btn= 'Live App'
                        link= 'https://vitoboos.github.io/radimax/'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='jsTitle'> Pure JavaScript Projects </h1>

                    <Project
                        name = 'Anime Searcher'
                        url = {animesearcher}
                        desc = 'Anime browser made with Jikan API, search for any anime!.'
                        shortdesc= 'A simple anime searcher'
                        btn= 'Live App'
                        link= 'https://vitoboos.github.io/animesearcher.github.io/HTML/home'
                    />

                    <Project
                        name = 'Message Codifier'
                        url = {encoder}
                        desc = 'Simple message codification made with regular expressions.'
                        shortdesc = 'Encode any message'
                        btn= 'Live App'
                        link= 'https://vitoboos.github.io/encoder.github.io/main'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='djangoTitle'> Django Projects </h1>

                    <Project
                        name = 'Character Manager'
                        url = {charmanager}
                        desc = 'Create and save characters.'
                        shortdesc= 'Character manager inspired by Fire Emblem GBA titles'
                        btn= 'Code'
                        link='https://github.com/Vitoboos/charManager'
                    />

                </div>

                <div className={styles.projectBox}>

                    <h1 className={styles.frameworkTitle}  id='electronTitle'> Electron Projects </h1>

                    <Project
                        name = 'To Do List App'
                        url = {todolist}
                        desc = 'Desktop productivity app.'
                        shortdesc= 'To do list.'
                        btn= 'Code'
                        link='https://github.com/Vitoboos/discipline-app'
                    />

                </div>

            <Message
                title = 'Dm Me!'
                btn = 'Send'
            />

            <Future/>

        </div>
    
    </Fragment>
    )
}
