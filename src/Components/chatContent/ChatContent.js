import { Avatar } from '@material-ui/core';
import React,{useState,useRef,useEffect} from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import ChatItems from './ChatItems';
import "./ChatContent.css";
// import Avatar from "../chatList/Avatar";
function ChatContent(props) {
 const messagesEndRef =useRef(null);
    const chatItms = [
            {
                key: 1,
                image:
                  "https://avatars.githubusercontent.com/u/70794984?s=460&u=5494bcd764543c41e52a2cd68973be47b31cb332&v=4",
                type: "",
                msg: "Hi Tim, How are you?",
              },
              {
                key: 2,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
                type: "other",
                msg: "I am fine.",
              },
              {
                key: 3,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
                type: "other",
                msg: "What about you?",
              },
              {
                key: 4,
                image:
                  "https://avatars.githubusercontent.com/u/70794984?s=460&u=5494bcd764543c41e52a2cd68973be47b31cb332&v=4",
                type: "",
                msg: "Awesome these days.",
              },
              {
                key: 5,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
                type: "other",
                msg: "Finally. What's the plan?",
              },
              {
                key: 6,
                image:
                  "https://avatars.githubusercontent.com/u/70794984?s=460&u=5494bcd764543c41e52a2cd68973be47b31cb332&v=4",
                type: "",
                msg: "what plan mate?",
              },
              {
                key: 7,
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
                type: "other",
                msg: "lets meet someday",
              },
        ];

  //  const [chatState, setChatState] = useState({
  //   chat:chatItms,
  //   msg: "",
  //  })

  const [chat,setChat]=useState(chatItms);
  const [msg,setMsg]=useState("");

    const inputEvent=(event)=>{
   //setChatState({msg:event.target.value});
   setMsg(event.target.value);
   console.log(msg);
   console.log(chat);
  // console.log(chatState.msg)
    };
  const  scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      };
    
    useEffect(()=>{
        window.addEventListener("keydown", (e) => {
            
          //when we press enter
            if(e.keyCode == 13){
              if (msg != "") {
                chatItms.push({
                  key: 1,
                  type: "",
                  msg: msg,
                  image:"https://avatars.githubusercontent.com/u/70794984?s=460&u=5494bcd764543c41e52a2cd68973be47b31cb332&v=4",
                });
                setChat([...chatItms]);
              //  setChatState({ chat: [...chatItms] }); //Automatically update chat
                scrollToBottom();
            setMsg( "" );
              }
            }
          });
    },[])
    // console.log(chatItms.msg)
    return (
      <>
       <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>John Doe</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <Button className="btn-nobg">
           
                <i className="fa fa-cog"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {chat.map((itm, index) => {
              return (
                <ChatItems
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={messagesEndRef}/>
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={inputEvent}
              value={msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
      </>
        
            
    )
};

export default ChatContent;
