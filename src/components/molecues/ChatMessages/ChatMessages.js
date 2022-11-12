import MyButton from "../../atoms/MyButton";

function ChatMessages(props){
    return(
        <ul>
            {props.messages.map((message) => {
            return(
                <li key={message.id}>
                    message: {message.message}
                    author: {message.author}
                <MyButton
                    text = 'X'
                    handleClick = {() => props.handleDeleteMessage(message.id)}
                >
                </MyButton>
                </li>
            );
            }) ?? []}
      </ul>  
    )
}

export default ChatMessages;