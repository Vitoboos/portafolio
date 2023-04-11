import React from 'react'
import styles from './Future.module.css'

import artificial from './images/artificialint.png'
import csharp from './images/c#.png'

export default function Future() {
return (

    <div>

        <h1 className={styles.title} id='futureTitle'> Mi Futuro... </h1>

        <div className={styles.section}>
            <h1 className={styles.text}>         Mi siguiente area de interés es la inteligencía artificial y sus aplicaciones, es un campo con un futuro brillante y que sera el núcleo de proyectos e industrias. </h1>
            <img className={styles.image} src={artificial}/>
        </div>
    

        <div className={styles.section2}>
            <img className={styles.image} src={csharp}/>
            <h1 className={styles.text}> También estoy interesado en aprender C# y en sus aplicaciones con el motor de Unity.</h1>            
        </div>
    

        <img/>

    </div>

)
}
