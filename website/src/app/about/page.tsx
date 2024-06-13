import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import styles from "@/assets/scss/about.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Button } from "@mui/material";
import { AddBoxOutlined, PlusOne, PlusOneOutlined, PrintOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
const AboutPage = () => {
  return (
    <Box display="flex" justifyContent="center">
      <div className={styles.container}>
        <div className={styles.text}>
          AboutPage Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown printer
          took a galley of type and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum
        </div>
      </div>
    </Box>
  );
};

export default AboutPage;
