// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';

import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Box,
    Divider,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
        <ListItem align-items="flex-start">
            <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar
                    src={data.photo}
                    alt={data.photo}
                    sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <Box>
                <ListItemText primary={data.name} />
                <ListItemText secondary={data.phone} />
                <ListItemText secondary={data.email} />
            </Box>
        </ListItem>
        <Divider />
    </>);
};

export default Contact;
