import React, {Component} from 'react';
import "./pro.css";

class Properties extends Component{
    
    render(){
        let {components, determined} = this.props;
        if(determined > -1){
            if(components[determined].name === "Button")
            return(
                <div className="properties">
                    <h2 className="center">Properties</h2>
                    Content:<br/><input id="content" onChange={this.props.keyPressed} type="text"value={this.props.components[determined].content} data-key="content"/><br/>
                    Width:<br/><input id="width" onChange={this.props.keyPressed} type="number" value={this.props.components[determined].width} data-key="width"/><br/>
                    Height:<br/><input id="height" onChange={this.props.keyPressed} type="number" value={this.props.components[determined].height} data-key="height"/><br/>
                    Background:<br/><input id="back" onChange={this.props.keyPressed} type="color" default={this.props.components[determined].bCol} data-key="background"/>
                </div>
            )
        }
        return(
            <div className="properties">
                <h2 className="center">Properties</h2>
            </div>
        )
    }
}


export default Properties;