import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class TodoApp extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            text: ["juan","pedro"]
            
        }

    
    }
    add(newTodo){
        this.setState({
            text: this.state.text.concat(this.state.newTodo),
            
        })
       
      }
    

      live(e) {
        
            this.setState({
                newTodo: e.target.value,
                
            })
            
        }
      

    render() {
        let write= this.state.text
       
        return(
            <div>
                <TodoForm back={this.add.bind(this)} write={this.live.bind(this)} />
                <TodoList items={write} />
            </div>
        )
    }
}

export default TodoApp;