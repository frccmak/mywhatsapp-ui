import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Input = ({ onSendMessage }) => {
    const [text, setText] = useState("")

    let onChange = (e) => {
        setText(e.target.value)
    }

    let onSubmit = () => {
        onSendMessage(text);
        setText("")
    }

    return (
        <div>
            <div className="message-input">
                <TextField
                    label="Input your message here..."
                    placeholder="message, then press ENTER/SEND button to send"
                    onChange={e => onChange(e)}
                    margin="normal"
                    value={text}
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            onSubmit(text);
                        }
                    }}
                    style={{ height: "30px", width: "80%" }}
                />

                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Send
                </Button>
            </div>
        </div>
    );
}

export default Input
