import '../styles/Filter.css'

const Filter = (props) => {
    return ( 
    <div>
        <input onChange={props.handleChange} placeholder="Type a name..."/>
    </div> );
}
 
export default Filter;