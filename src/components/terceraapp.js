// import React from 'react'


// class Menu extends React.Component {
//     constructor (props) {
//       super(props)
//     }
  
//     render () {
//       let options = this.props.options
//       return (
//          <ul>
//           {options.map(option => <li>{option}</li>)}
//          </ul>
//       )
//     }
//   }


// class MyComponent extends React.Component {
//   constructor () {
//     super()
//   }

//   render () {
//     let menuOptions = ['Opción 1', 'Opción 2', 'Opción 3']
//     return <Menu options={menuOptions} />
//   }
// }

// export default MyComponent


//=====================================================================================

// import React from 'react'

// class List extends React.Component {
//     constructor() {
//         super()
//     }
    
//     render() {
//         let OptionsItems = ["Juan Rodriguez","Reyna Gonzalez"]
//         return(
//             <div>
//                 < OtroList options={OptionsItems}/>
//             </div>
//         )
//     }
// }

// class OtroList extends React.Component {
//     constructor(props) {
//         super(props)
//     }
    
//     render() {
//         let  opciones=this.props.options
//         return(
//             <div>
//                 <ul>
//                     {opciones.map((gaus) => <li>{gaus} </li>)}
//                 </ul>
//             </div>
//         )
//     }
// }


// export default List;


//===================================================================================

import React from 'react'

class List extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            menuOptions:["juan", "reyna", "abuelos", "Padres"]
        }
    }


    handleAddOption () {
        this.setState({
          menuOptions: this.state.menuOptions.concat(['Nueva Opción'])
        })
      }

    render() {
        return(
            <div>
                <Menu options={this.state.menuOptions} onAddOption={this.handleAddOption.bind(this)}/>
            </div>
        )
    }


}




class Menu extends React.Component {
        constructor (props) {
          super(props)
        }

        
      
        render () {
          let options = this.props.options
          return (
             <div>
                <ul>
                    {options.map(option => <li>{option}</li>)}
                </ul>
                <button onClick={this.props.onAddOption}> add </button>
            </div>
          )
        }
      }

export default List;


//==============================================================================================

// import React from 'react'

// class List extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state= {
//             OptionsItems: ["Reyna Analiz Gonzalez Henriche", "Juan Carlos Joser Rodriguez Weffer"]
//         }        

//     }

//     agregar() {
//         this.setState({
//             OptionsItems: this.state.OptionsItems.concat(["ESTAMOS EN COLOMBIA"])
//         })
//     }
//         render() {
            
//             return (
//                 <div>
//                     < OtroComponente options={this.state.OptionsItems} AddOption={this.agregar.bind(this)}/>
//                 </div>
//             )
//         }
//     }

//     class OtroComponente extends React.Component{
//         constructor(props) {
//             super(props);
//         }

//         render() {
//             let opciones= this.props.options
//             return(
//                 <div>
//                     <button onClick={this.props.AddOption}> Add new </button>

//                     <ul>
//                         {opciones.map(items => <li>{items} </li>)}
//                     </ul>
//                 </div>
//             )
//         }
//     }



//     export default List;


//==========================================================================================


// import React from 'react'

// class List extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             Todo: ["Walk the dog", "food", "study"],
//             value: ""
//         }
//     }


//     agrego() {
//         this.setState({
//             Todo: this.state.Todo.concat("carlos")
//         })
//     }

//     write(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }

//     render() {
//         return (
//             <div>
                 
                 
                 
//                 < AnotherComponent ListTodo={this.state.Todo}  AddOptions={this.agrego.bind(this)} />
//             </div>
//         )
//     }
// }

// class AnotherComponent extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         let arreglo=this.props.ListTodo
       
//         return(
//             <div>
               
               
//                 <button onClick={this.props.AddOptions} > Add new todo </button>

//                 <ul>
//                     {arreglo.map(item => <li> {item} </li>)}
//                 </ul>
//             </div>
//         )
//     }
// }

// export default List;

//=====================================================================================


// import React from 'react'

// class TodoList extends React.Component {

//     constructor(){
//         super();

//         this.state = {
//             items: ["juan", "carlos"]
//         }
//     }

    
    
//     additems(event) {
//         var itemArray = this.state.items;
//         event.preventDefault()

//         itemArray.push({
//             text: this._inputElement.value
            
//         })

//         this.setState({
//             items: itemArray
            
//         })

//         this._inputElement.value = ""
    
        

        
          
//     }
    

//     render(){
//         return (
//             <div>
//                 <div>
//                     <form onSubmit={this.additems}>
//                         <input type="text" placeholder="add task" ref={(a) => this._inputElement = a}/>
//                         <button type="submit"> Add</button>
//                     </form>
//                 </div>

//                 <Todoitems entries={this.state.items}/>
//             </div>
//         )
//     }
// }


// class Todoitems extends React.Component {
    
//         constructor(props) {
//             super(props);
//         }
    
//         render() {
//             let todoEntries = this.props.entries
            
//             return(

//                 <div>
//                     {todoEntries.map((tom,i) => <li key={i}> {tom} </li>)}
                    
//                 </div>
//             )
//         }   
//     }

// export default TodoList;


//==============================================================================================
