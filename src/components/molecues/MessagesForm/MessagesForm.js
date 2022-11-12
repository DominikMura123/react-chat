import MyButton from "../../atoms/MyButton"

function MessageForm(props){
    return(
        <form>
        <label>
        Message
        <input 
            type="text" 
            value={props.messageValue}
            onChange={props.handleMessageChange}
        />
        </label>
        <label>
        Author
        <input 
            type="text" 
            value={props.authorValue}
            onChange={props.handleAuthorChange}
        />
        </label>
        <MyButton
            text = 'Add'
            handlerRemove = {props.handleSubmit}>
        </MyButton>   
        </form>
    )
}

export default MessageForm