import React, {Component} from 'react';

class Paper extends Component{
    btn_clickHere = (e) => {
        this.props.btn_click(e);
    }
    ondragstart = (e , id)=>{
                
    }
    render(){
        let id = -1;
        return(
            <React.Fragment>
                <h2 className="center">Paper</h2>
                {this.props.components.map((element, index) => {
                  ++id;
                  let css = { 
                              color          :element.fCol,
                              background     : element.bCol,
                              width          : element.width + "px",
                              height         : element.height + "px",
                              position       : 'absolute',
                              left           : element.x,
                              top            : element.y,
                              borderStyle    : element.borderStyle,
                              borderColor    : element.borderColor,
                              borderWidth    : element.borderWidth
                            }
                  let {content} = element;
                  if(this.props.determined !== index)
                     return (
                       <button onClick={this.btn_clickHere} data-key={id} key={id} style={css}>{content}</button>
                     )
                  else 
                    return (
                        <button draggable onDragStart={(e) => this.ondragstart(e, "Button")} onClick={this.btn_clickHere} data-key={id} key={id} style={css}>{content}</button>
                    )
                })}
          </React.Fragment>
        )
    }
}
export default Paper;