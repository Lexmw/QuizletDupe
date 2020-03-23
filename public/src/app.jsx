import React, { Component } from "react";
import Draggable from '../src/draggable.jsx'

class Main extends Component {
    render() {
        return (

            <div>
                <p> The goal is to drag and drop the thing into its location. May we can use this as a form of vision board</p>
                <Draggable />
            </div>
        )
    }
}

export default Main;