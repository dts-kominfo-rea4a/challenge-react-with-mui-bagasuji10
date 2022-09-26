// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
import React from 'react';
import { Typography } from "@mui/material";
const Header = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography style={{ color: "#395B64" }} variant="h3" gutterBottom>
          Call a Friend
        </Typography>

        <h2
          style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #9976AE",
            lineHeight: "0.2em",
            margin: "7px 0 22px",
            color: 'aliceblue',
          }}
        >
          <span
            style={{
              backgroundColor: "#fff",
              padding: "0 7px",
              fontSize: "0.7em",
              color: "#1B4350",
            }}
          >
            Your friendly contact app
          </span>
        </h2>
      </div></>
  );
};

export default Header;
