import React, { Component } from "react";
import "../styles.scss"



//https://www.youtube.com/watch?v=C22hQKE_32c

class Draggable extends Component {

componentDidMount() {
    let fill = document.querySelector('.fill');
    let empties = document.querySelectorAll('.empty');
    
    //fil listeners
    fill.addEventListener('dragstart', dragStart);
    fill.addEventListener('draggend', dragEnd);
    
    //loop through empties and call drag events
    for(let empty of empties){
        empty.addEventListener('dragover', dragOver);
        empty.addEventListener('dragenter', dragEnter);
        empty.addEventListener('dragleave', dragLeave);
        empty.addEventListener('drop', dragDrop);
    }

    //Drag functions
    function dragStart() {
        this.className += ' hold';
        // setTimeout(()=> (this.className= 'invisible'), 0);
    } 
    
    function dragEnd() {
        this.className = 'fill';
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
       e.preventDefault();
       this.className += ' hovered';
    }

    function dragLeave() {
        this.className = 'empty';
    }

    function dragDrop() {
        this.className = 'empty';
        this.append(fill);
    }
}

render(){
    return(
        <div>
            <h1> Draggable Component!</h1>

            <div className='empty'>
                <div className='fill' draggable='true'></div>
            </div>
            <div className='empty'></div>
            <div className='empty'></div>
            <div className='empty'></div>
            <div className='empty'></div>
            <div className='empty'></div>
        </div>
        
    )
}

}

export default Draggable;