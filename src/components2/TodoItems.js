import React from 'react'

class TodoItems extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            done: false
        }

        this.toggle=this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            done: !this.state.done
        })
    }

    render() {
        let{charter}=this.props
        return(
            <div>
                <input value={this.state.done} type="checkbox" onClick={this.toggle} />
                {this.state.done ?"DONE: " + charter : charter}
            </div>
        )
    }
}

export default TodoItems;