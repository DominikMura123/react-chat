function MyButton(props){
return(
    <button 
        type = {props.type ? props.type : 'button'} 
        onClick = {props.handleClick}>
    {props.text}
    </button>
)}

export default MyButton