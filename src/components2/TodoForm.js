import React from 'react'





class TodoForm extends React.Component {

    constructor(props) {
        super(props);

        
  
    }

     
     
    render() {
   
        let {newTodo} = this.props

        return(
            <div>
                <input  type="text" onChange={this.props.write}/>
                <button onClick={this.props.back}> Add </button>
                             
            </div>
        )
    }
}

export default TodoForm;