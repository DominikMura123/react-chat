import MyButton from "../../atoms/MyButton"

function MessageForm(props){
    return(
        <form onSubmit = {props.handleSubmit}>
            <label>
            Message
            <input 
                type = "text" 
                value = {props.messageValue}
                onChange = {props.handleMessageChange}
            />
            </label>
            <label>
            Author
            <input 
                type = "text" 
                value = {props.authorValue}
                onChange = {props.handleAuthorChange}
            />
            </label>
            
            <MyButton
                type = 'submit'
                text = 'Add'>
            </MyButton>   
        </form>
    )
}

export default MessageForm