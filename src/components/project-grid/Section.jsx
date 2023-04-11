import React from 'react'


export default function Section(props) {

    function gotoSection(){
        let nav = document.getElementById(props.href)
        nav.scrollIntoView(({
            behavior: "smooth",
            block: "center",
            inline: "center"
        }))
    }

    return (

        <div>

            <div onClick={gotoSection}>
                <h1> {props.title} </h1>  
                <img src={props.url} alt=""/>
            </div>

        </div>

    )
}
