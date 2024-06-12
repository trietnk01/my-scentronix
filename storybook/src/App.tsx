import React from "react";
import { Box, Button, ButtonProps } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "@/assets/scss/home.module.scss";
import { styled } from "@mui/material/styles";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import clsx from "clsx";
const ButtonCustomized = styled(Button)<ButtonProps>(() => ({
  color: "#FFF",
  backgroundColor: "#484848",
  "&:hover": {
    backgroundColor: "#1a1a1a"
  }
}));
const App = () => {
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [isShowBoxB, setIsShowBoxB] = React.useState<boolean>(false);
  const [isShowMan, setIsShowMan] = React.useState<boolean>(false);
  const [isDisabled, setDisabled] = React.useState<boolean>(false);
  const handleOpen = () => {
    setIsShow(true);
    setIsShowMan(true);
    setDisabled(true);
  };
  const handleClose = () => {
    setIsShow(false);
    setIsShowMan(false);
    setDisabled(false);
  };
  const handleOpenBoxB = () => {
    setIsShowBoxB(true);
    setIsShowMan(true);
    setDisabled(true);
  };
  const handleCloseBoxB = () => {
    setIsShowBoxB(false);
    setIsShowMan(false);
    setDisabled(false);
  };
  return (
    <React.Fragment>
      <div className={clsx(styles.man, isShowMan && styles.active)}></div>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={clsx(styles.productBox, isShow && styles.active)}>
            <div className={styles.item}>
              <div className={styles.kcicle}>
                <AddCircleOutlineIcon />
                <div className={styles.bottle}>50ml</div>
              </div>
              <div className={styles.price}>$80.00</div>
            </div>
            <div className={styles.item}>
              <div className={styles.kcicle}>
                <AddCircleOutlineIcon />
                <div className={styles.bottle}>60ml</div>
              </div>
              <div className={styles.price}>$60.00</div>
            </div>
            <div className={styles.item2}>
              <div className={styles.vancle}>
                <div className={styles.kcicle}>
                  <AddCircleOutlineIcon />
                  <div className={styles.bottle}>5ml</div>
                </div>
                <div className={styles.price}>$15.00</div>
              </div>
              <div className={styles.tabca}>
                <div className={styles.forml}>3 x 5ml for $40.00</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonClickTop}>
            {!isShow && (
              <ButtonCustomized
                startIcon={<AddIcon />}
                variant="contained"
                onClick={handleOpen}
                disabled={isDisabled}
              >
                Buy
              </ButtonCustomized>
            )}
            {isShow && (
              <div className={styles.closeBox}>
                <CloseIcon onClick={handleClose} className={styles.btnClose} />
              </div>
            )}
          </div>
          <div className={clsx(styles.productBoxB, isShowBoxB && styles.active)}>
            <div className={styles.item}>
              <div className={styles.kcicle}>
                <AddCircleOutlineIcon />
                <div className={styles.bottle}>50ml</div>
              </div>
              <div className={styles.price}>$80.00</div>
            </div>
            <div className={styles.item}>
              <div className={styles.kcicle}>
                <AddCircleOutlineIcon />
                <div className={styles.bottle}>60ml</div>
              </div>
              <div className={styles.price}>$60.00</div>
            </div>
            <div className={styles.item2}>
              <div className={styles.vancle}>
                <div className={styles.kcicle}>
                  <AddCircleOutlineIcon />
                  <div className={styles.bottle}>5ml</div>
                </div>
                <div className={styles.price}>$15.00</div>
              </div>
              <div className={styles.tabca}>
                <div className={styles.forml}>3 x 5ml for $40.00</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonClickBottom}>
            {!isShowBoxB && (
              <ButtonCustomized
                startIcon={<AddIcon />}
                variant="contained"
                onClick={handleOpenBoxB}
                disabled={isDisabled}
              >
                Buy
              </ButtonCustomized>
            )}
            {isShowBoxB && (
              <div className={styles.closeBox}>
                <CloseIcon onClick={handleCloseBoxB} className={styles.btnClose} />
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
