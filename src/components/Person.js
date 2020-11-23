import '../styles/Person.css';

const Person = (props) => {
    const { avatar, id, name, description } = props.person

    return ( 
    <div className="person-card" key={id}>
        <img src={avatar} alt="person avatar" />

        <div className="details">
            <p id="full-name">{name}</p>
            <p id="description">{description}</p>
        </div>

    </div> 
    );
}
 
export default Person;