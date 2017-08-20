import React from 'react'


const Personasarreglo = ["Juan", "Reyna", "rpodriguez"]

class Personas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let charles = this.props.opciones

        return(
            <ul>
                {charles.map((tierra) => <li>{tierra} </li>)}
            </ul>
        )
    }
}



class Otraapp extends React.Component {
    constructor () {
        super();
    }

 
    render() {

        let PersonasOptions = Personasarreglo
        return(
            <div>
                <Personas opciones={PersonasOptions}/>
               
            </div>
        )
    }
}

export default Otraapp;