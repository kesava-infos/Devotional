import React from "react";
import gsap from "gsap";
import SnowfallComponent from "../snowfall/SnowfallComponent"
export default class MainComponent extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            lang:"Telugu"
        }
    }

    render(){
        return(<div className="mainComponent">
            <SnowfallComponent />
            <img id="flute" src="./img/peacock-feather-flute.png" />
        </div>)
    }

    componentDidMount(){
        var tl = gsap.timeline();
        tl.to("#flute", {duration: 1, top: window.screen.availHeight - 135, opacity: 0.5});
    }
}