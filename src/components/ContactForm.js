// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import { TextField, Button } from "@mui/material";
import React, { useState } from 'react';
const ContactForm = (addNewContact) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [name, addName] = useState("");
    const [phone, addPhone] = useState("");
    const [email, addEmail] = useState("");
    const [photo, addPhoto] = useState("");
    const inputName = (event) => {
        addName(event.target.value);
    };
    const inputPhone = (event) => {
        addPhone(event.target.value);
    };
    const inputEmail = (event) => {
        addEmail(event.target.value);
    };
    const inputPhoto = (event) => {
        addPhoto(event.target.value);
    };
    const submitData = (event) => {
        event.preventDefault();
        let dataFormInput = { name, phone, email, photo, };
        addName("");
        addPhone("");
        addEmail("");
        addPhoto("");
        addNewContact(dataFormInput);
    };
    return (
        <>
            <div
                style={{
                    backgroundColor: "#FAFFE4",
                    width: "50%",
                    height: "380px",
                    borderRadius: "7px",
                    padding: "7px",
                    marginTop: "65px",
                    marginLeft: "25px",
                }}
            >
                <form onSubmit={submitData}>
                    <TextField
                        type="text"
                        fullWidth
                        variant="filled"
                        required
                        id="outlined-required"
                        margin="normal"
                        label="Name"
                        value={name}
                        onChange={inputName}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        variant="filled"
                        required
                        id="outlined-required"
                        margin="normal"
                        label="Phone"
                        value={phone}
                        onChange={inputPhone}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        variant="filled"
                        required
                        id="outlined-required"
                        margin="normal"
                        label="Email"
                        value={email}
                        onChange={inputEmail}
                    />
                    <TextField
                        type="text"
                        fullWidth
                        variant="filled"
                        required
                        id="outlined-required"
                        margin="normal"
                        label="Photo"
                        value={photo}
                        onChange={inputPhoto}
                    />
                    <Button
                        type="submit"
                        style={{ marginTop: "25px", color: "green" }}
                    >
                        Add New
                    </Button>
                </form>
            </div></>
    );
}

export default ContactForm;