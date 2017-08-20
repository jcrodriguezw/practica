import React from 'react'
import TodoItems from './TodoItems'

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let charter= this.props.items
        return (
            <div>
                <ul>
                    {charter.map(todo => <li><TodoItems charter={todo}/> </li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList;