

import React from 'react'

class Apptodo extends React.Component {

    constructor (props) {
        super(props);

        this.state= {
            title:["reyna","juan"],
            
        }
    }

add() {
    
    this.setState({
        title:this.state.title.concat(this.state.value)
        
    })
}


escribe(event) {
    
    this.setState({
        value:event.target.value 
        
    })

}

remove(index){
    this.setState({
        title:this.state.title.splice(index)
    })
}




    render() {
        return(
            
            <List person={this.state.title} 
            agregar={this.add.bind(this)} 
            write={this.escribe.bind(this)} 
            elimina={this.remove.bind(this)}
            check={this.state.done}
            
            />
        )
    }
}


class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let people= this.props.person
        
        return(
            <div>
                <button onClick={this.props.agregar}> Add Todo </button>
                <input  onChange={this.props.write} />

                
                <ul> 
                   <div>
                       
                        {people.map((chan,i) => <li  key={i}>{ chan } </li>)} 
                    
                    </div>

                </ul>
            </div>
        )
    }
}


export default Apptodo;