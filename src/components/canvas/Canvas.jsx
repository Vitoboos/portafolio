import React from 'react';
import { useRef, useEffect } from 'react'
import styles from './Canvas.module.css'

const Canvas = () => {

    const innerWidth = window.innerWidth
    const innerHeight = window.innerHeight

    const canvas = React.useRef()

    React.useEffect(() => {                             
        const ctx = canvas.current.getContext('2d'); 

        var mouse = {
            x: undefined,
            y: undefined
        }
        
        window.addEventListener('mousemove', function(event){
            mouse.x = event.x
            mouse.y = event.y
        })
        
    function Circle(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius
        this.dx = .25;
        this.dy = .25;
        this.color = color;

        let colorArray = ['#D46AF7', '#9D4FB8', '#5C2E6B', '#673478', '#462352']
        let randomColor =  colorArray[Math.floor(Math.random()*colorArray.length)]

        // Randomize directions

        let rngX = Math.random()
        let rngY = Math.random()
        
        if(rngX > 0.5){
            this.dx = -this.dx
        }

        if(rngY > 0.5){
            this.dy = -this.dy
        }
    
        this.draw = function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.strokeStyle = '#3e3e3e'
            ctx.fillStyle = this.color
            ctx.fill()
        }

        this.update = function() {

            let leftLimit = innerWidth/10
            let rightLimit = leftLimit * 9
            let topLimit = innerHeight/10
            let botLimit = topLimit * 9

            if(this.x <= leftLimit){
                this.dx = -this.dx
            }

            if(this.x >= rightLimit){
                this.dx = -this.dx
            }

            if(this.y <= topLimit){
                this.dy = -this.dy
            }

            if(this.y >= botLimit){
                this.dy = -this.dy
            }

            this.x += this.dx
            this.y += this.dy
            
            // interaction

            if(Math.abs(mouse.x - this.x) <= 75){
                this.radius += 1
                this.color = '#383840'
            }

            else{
                this.radius -= 1
                this.color = randomColor
            }

            if(this.radius <= 20){
                this.radius = 20
            }

            if(this.radius >= 100){
                this.radius -= 2.5
            }
            this.draw()
        }
        
    }

    var circleArray = []
    var colorArray = ['#D46AF7', '#9D4FB8', '#5C2E6B', '#673478', '#462352']
    
    for (var i = 0; i < 25; i++){
    
        // Set X position 
        let leftLimit = innerWidth/10
        let rightLimit = leftLimit * 9
        // Set Y position
        let topLimit = innerHeight/10
        let botLimit = topLimit * 9

        let generateX = Math.floor(Math.random() * (rightLimit - leftLimit + 1) + leftLimit)
        let generateY = Math.floor(Math.random() * (botLimit - topLimit + 1) + topLimit)
        let randomColor =  colorArray[Math.floor(Math.random()*colorArray.length)]
        let radius = 20

        const element = new Circle(generateX, generateY, radius, randomColor) 
        element.draw()
        
        circleArray.push(element)

        function animateGroup(){
            requestAnimationFrame(animateGroup)
            ctx.clearRect(0, 0, innerWidth, innerHeight)
            
            for(var i = 0; i < circleArray.length; i++){
                circleArray[i].update()
            }
        }
        animateGroup()      
    }
})
    return (
    <canvas className={styles.canvas}
        ref = {canvas}
        width={innerWidth}
        height={innerHeight}
        />
    )
};



export default Canvas;