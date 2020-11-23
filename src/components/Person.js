const Person = (props) => {
    const { avatar, id, name, email, description } = props.person

    return ( 
    <div key={id}>
        <img src={avatar} />
        <p>{name}</p>
        <p>{email}</p>
        <p>{description}</p>
    </div> 
    );
}
 
export default Person;