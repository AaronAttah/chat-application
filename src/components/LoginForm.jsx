import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    console.log(username)
    console.log(password)

    const handleSubmit = async (e) => {
        e.preventDefault();

        //what i want to do here
        // username / password ->chatengine should give messages
        // if it works out -> get me logged in
        // if error -> allow me to try with new messages.....

        const authObject = {
            'Porject-ID': "2f37c0ad-9d33-47ce-8038-5bc811aaebb4",
            'User-Name': username,
            'User-Secret': password,
        };

        window.localStorage.setItem("username", username);
        window.localStorage.setItem("password", password);
        window.location.reload();

        try {
            // username / password ->chatengine should give messages
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });

            // if it works out -> get me logged in  👆👆👆

            // and if logged in keeep me logged in👇👇
            // window.localStorage.setItem("username", username);
            // localStorage.setItem("password", password);

        } catch (error) {
            // if error -> allow me to try with new messages.....
            setError('Oops, incorrect credentials...')
        }
    };

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center" >
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error"> {error} </h2>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
