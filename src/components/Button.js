import React, {Component} from 'react';


class Button extends Component{
  ondragstart = (e, id) => {
    console.log(id);
    e.dataTransfer.setData('id', id);
  }
  render(){
    return(
      <button className="btn" draggable onDragStart={(e) => this.ondragstart(e, "Button")}>Button</button>
    )
  }
}
export default Button;