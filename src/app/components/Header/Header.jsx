"use client";
import { Box, Button } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
       
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        boxSizing: "border-box",
        height: "80px", // Fixed height
        color: "white", // Text color white for contrast
      }}
    >
      <Image
        src="/assets/images/logo.svg"
        alt="Film Ghar Logo"
        width={120}
        height={50}
      />
      <Button
        variant="contained"
        color="error"
        startIcon={
          <Image
            src="/assets/images/login.svg"
            width={16}
            height={16}
            alt="Sign In"
          />
        }
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          padding: "8px 16px",
        }}
      >
        Sign In
      </Button>
    </Box>
  );
}
