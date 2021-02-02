import React,{useState} from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
function ReactChat() {
   const[msg,setMsg]= useState([
       {
           id:1,
           message:"Hi how are you React Chat App",
           senderName:"John Smith"
       },
       {
        id:0,
        message:"Good Thanks!"
       }
   ]);
   const [isTyping,setIsTyping]=useState(false);
    return (
        <div>
          
    <ChatFeed
      messages={msg} // Array: list of message objects
      isTyping={isTyping} // Boolean: is the recipient typing
      hasInputField={false} // Boolean: use our input, or use your own
      showSenderName // show the name of the user who sent the message
      bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
      // JSON: Custom bubble styles
      bubbleStyles={
        {
          text: {
            fontSize: 30
          },
          chatbubble: {
            borderRadius: 70,
            padding: 40
          }
        }
      }
    />
   
        </div>
    )
}

export default ReactChat;
