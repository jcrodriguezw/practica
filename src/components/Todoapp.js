import React from 'react'

const Persona = [ {
    name: "juan carlos",
    apellido: "rodriguez weffer"
}, {
            name: 'Luis',
            apellido: 'Rodriguez'
        }]


const PrimerNombre = (props) => {
    
            return(
                <div>
                    <p>{props.people.name} {props.people.apellido}</p>
                    
                </div>
            )
}

const ElNombre = props => {
    return(
        <div>
            <h1> HOLA... < PrimerNombre people={props.humano}/> </h1>
        </div>
    )
}

const YourName = (props) => {
    const cualquiera = props.otro.map((Persona,i) =><ElNombre humano={Persona} key={i} />)
    return (
        <div>
            {cualquiera}
        </div>
    )
}


const Cola = props => {
    return (
        <YourName otro={Persona}/>
    )
}

const Nombre = props => {
    return(
        <div>
            <h1 onClick={this.Cola}> HAS LA MUESTRA </h1>
        </div>
    )
}

export default Nombre;