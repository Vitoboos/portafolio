import React from 'react'
import styles from './Future.module.css'

import artificial from './images/artificialint.png'
import csharp from './images/c#.png'

export default function Future() {
return (

    <div>

        <h1 className={styles.title} id='futureTitle'> My Future... </h1>

        <div className={styles.section}>
            <h1 className={styles.text}> My next area of interest is Artificial Intelligence and it's applications, it's a field with a bright future and it will lead many projects and industries. </h1>
            <img className={styles.image} src={artificial}/>
        </div>
    

        <div className={styles.section2}>
            <img className={styles.image} src={csharp}/>
            <h1 className={styles.text}> I am also interested in learning C# and it's applications with the Unity Engine. </h1>            
        </div>
    

        <img/>

    </div>

)
}
