import '../styles/Filter.css'

const Filter = (props) => {
    return ( 
    <div>
        <input
        onChange={props.handleChange}
        aria-label="name input"
        aria-required="true"
        placeholder="Type a name..."
        />
    </div> );
}
 
export default Filter;