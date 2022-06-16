import './FullName.css';

//Creas un componente llamado FullName, el cual regrese nuestro nombre completo,como parrafo,dado los props
//firstName, lastName
//Notas: el apellido puede no ir

export default function FullName(props){
    console.table(props);
    return (
        <h2>{props.firstName} {props.lastName}</h2>
    )
}

