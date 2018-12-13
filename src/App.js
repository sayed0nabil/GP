import React, { Component } from 'react';
import Paper from './components/Paper.js';
import Properties from './components/Properties.js';
import Button from './components/Button.js';
import './App.css';

class App extends Component {
  state = {
    components: [],
    xml: [],
    determined: -1
  }
  
  ondragover = (e) => {
    e.preventDefault();
  }
  ondrop = (e) =>{
    let {components} = this.state;
    let id = e.dataTransfer.getData('id');
    components.push({
      name: id,
      content: "Welcome",
      width: 100 ,
      height: 30 , 
      fCol: 'black',
      bCol: '#FFF',
      x: e.pageX - 50 + "px",
      y: e.pageY - 15+ "px",
      borderStyle    : "solid",
      borderColor    : "#06DDEC",
      borderWidth    : "3px"
    });
    components.map((item, index) => {
      if( index !== components.length-1){
        item.borderColor = "black";
        item.borderWidth = "1px";
      }
    });
    let last = components[components.length-1];
    let xml = this.state.xml;
    xml.push(
      "<" + last.name + ">\n" +
    "<width>" + last.width + "px</width>\n" +
    "<height>" + last.height + "px</height>\n" + 
    "<fcolor>" + last.fCol + "</fcolor>\n" + 
    "<bcolor>" + last.bCol + "</bcolor>\n" + 
    "<posx>" + last.x + "</posx>\n" + 
    "<posy>" + last.y + "</posy>\n" + 
    "<borderwidth>" + last.borderWidth + "</borderwidth>\n" +
    "<borderstyle>" + last.borderStyle + "</borderstyle>\n" +
    "<bordercolor>" + last.borderColor + "</bordercolor>\n" +
    "<content>" + last.content +  "</content>\n" +
    "</ " + last.name + ">"
    );    
    this.setState({
      components,
      xml,
      determined: components.length-1
    });
  }
  btn_click = (e) => {
    let {components} = this.state;
    components.map((item, index) => {
        if(index !== e.target.getAttribute("data-key")){
            item.borderColor = "black";
            item.borderWidth  = "1px";
        }
    })
    this.setState({
      determined: e.target.getAttribute("data-key")
    })
    components[e.target.getAttribute('data-key')].borderColor = "#06DDEC";
    components[e.target.getAttribute('data-key')].borderWidth = "3px";
    console.log(components);
    this.setState({
        components
    })
}
keyPressed = (e) => {
  let {components, xml} = this.state;
  let determinedComponent = components[this.state.determined];
  let attr = e.target.getAttribute("data-key")
  if(attr === "content")
    determinedComponent.content = e.target.value;
  else if(attr === "width")
    determinedComponent.width = e.target.value;
  else if(attr === "height")
    determinedComponent.height = e.target.value;
  else if( attr === "background")
    determinedComponent.bCol = e.target.value;
  xml[this.state.determined] = 
  "<" + determinedComponent.name + ">\n" +
  "<width>" + determinedComponent.width + "px</width>\n" +
  "<height>" + determinedComponent.height + "px</height>\n" + 
  "<fcolor>" + determinedComponent.fCol + "</fcolor>\n" + 
  "<bcolor>" + determinedComponent.bCol + "</bcolor>\n" + 
  "<posx>" + determinedComponent.x + "</posx>\n" + 
  "<posy>" + determinedComponent.y + "</posy>\n" + 
  "<borderwidth>" + determinedComponent.borderWidth + "</borderwidth>\n" +
  "<borderstyle>" + determinedComponent.borderStyle + "</borderstyle>\n" +
  "<bordercolor>" + determinedComponent.borderColor + "</bordercolor>\n" +
  "<content>" + determinedComponent.content +  "</content>\n" +
  "</ " + determinedComponent.name + ">";
  this.setState({
    components,
    xml
  })
}
move = (e) =>{
  console.log("hello");

}
  render() {
    return (
        <div className='app'>
          <div className="tools center">
            <h2>Tools</h2>
            <Button />
          </div>
          <div className="paper" onDragOver={(e) => this.ondragover(e)} onDrop={(e) => this.ondrop(e)}>
            <Paper btn_click ={this.btn_click} determined={this.state.determined} components={this.state.components} move={this.move}/>
          </div>
          <Properties determined={this.state.determined} components={this.state.components} keyPressed={this.keyPressed}/>
          <div className="xml">
            <h2 className="center">XML</h2>
            {this.state.xml.map((item, index) => {
              if( index == this.state.determined)
                return (
                  <span style={{background: "white"}} key={index}>{item}</span>
                )
              else 
                return (
                  <span style={{background: "transparent"}} key={index}>{item}</span>
                )
            })}
          </div>
        </div>
    );
  }
}

export default App;
