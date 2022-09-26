// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import { Typography } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (<>
        <div
            style={{
                alignItems: "right",
                padding: "7px 7px 7px 7px",
                gap: "25px",
                display: "flex"
            }}
        >
            <div>
                <img
                    src={data.photo}
                    alt=""
                    style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "22px",
                    }}
                />
            </div>
            <div style={{ marginTop: "12px", verticalAlign: "middle" }}>
                <Typography variant="body2" display="block">
                    <strong>{data.name}</strong>
                </Typography>
                <Typography
                    style={{ color: "#1E2868" }}
                    variant="caption"
                    display="block"
                >
                    {data.phone}
                </Typography>
                <Typography
                    style={{ color: "#1E2868" }}
                    variant="caption"
                    display="block"
                >
                    {data.email}
                </Typography>
            </div>
        </div>
        <hr style={{ marginTop: "-7px" }}></hr></>);
};

export default Contact;
