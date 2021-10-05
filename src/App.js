import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";


function App() {
    if(!localStorage.getItem('username')) return <LoginForm />

   
    // const getpass = localStorage.getItem('username', 'password')
    // console.log(getpass);

    return (
        <ChatEngine
            height="100vh"
            projectID="2f37c0ad-9d33-47ce-8038-5bc811aaebb4"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} //we passed in component props
        
        />
    );
}

export default App;
