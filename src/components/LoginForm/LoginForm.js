import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const LoginForm = ({ onSubmit }) => {

    document.title = "myWhatsapp";

    const [username, setUsername] = useState("");
    let handleUserNameChange = e => setUsername(e.target.value);

    let handleSubmit = () => {
        onSubmit(username);
    }

    return (
        <div>
            <TextField
                label="Input your user name"
                placeholder="user name"
                onChange={handleUserNameChange}
                margin="normal"
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleSubmit();
                    }
                }}
            />
            <br />
            <Button variant="contained" color="primary" onClick={handleSubmit} >
                Login
            </Button>

        </div>
    )
}

export default LoginForm
