import styles from "@/assets/scss/recipes.module.scss";
import { PrintOutlined } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
const Loading = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <div className={styles.container}>
        <Box mt={2}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton />
          <Skeleton animation="wave" />
        </Box>
      </div>
    </Box>
  );
};

export default Loading;
