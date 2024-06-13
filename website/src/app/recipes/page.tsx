import styles from "@/assets/scss/recipes.module.scss";
import { PrintOutlined } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const RecipesPage = () => {
  return (
    <Box display="flex" justifyContent="center" width="100%">
      <div className={styles.container}>
        <div className={styles.product}>
          <div className={styles.productInfo}>
            <ul className={styles.breadcrumbs}>
              <li>
                <Link href={"/"}>Recipes</Link>
              </li>
              <li>
                <Link href={"/"}>Bread</Link>
              </li>
              <li>
                <Link href={"/"}>Quick bread</Link>
              </li>
            </ul>
            <h1 className={styles.slogan}>Whole-Grain Banana</h1>
            <h2 className={styles.subSlogan}>Bread</h2>
            <div className={styles.subContent}>
              This one-bowl banana bread - our 2018 Recipe of the Year - uses the simplest
              ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50
              mix of flours (all-purpose and whole wheat) we often make the bread 100% whole wheat,
              and honestly? No one can tell, it's that good!. And not only is this bread delicious
            </div>
            <div className={styles.boxDetail}>
              <div className={styles.boxIcon}>
                <AccessTimeIcon className={styles.icon} />
                <div className={styles.boxIconInfo}>
                  <div className={styles.boxPrep}>PREP</div>
                  <div className={styles.box10Mins}>10 mins</div>
                </div>
              </div>
              <div className={styles.boxIcon}>
                <div className={styles.boxIconInfo}>
                  <div className={styles.boxPrep}>BAKE</div>
                  <div className={styles.box10Mins}>1 hr to hr 15 mins</div>
                </div>
              </div>
              <div className={styles.boxIcon}>
                <div className={styles.boxIconInfo}>
                  <div className={styles.boxPrep}>TOTAL</div>
                  <div className={styles.box10Mins}>1 hr 10 mins</div>
                </div>
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.boxDetail}>
              <div className={styles.boxIcon}>
                <BlurCircularIcon className={styles.icon} />
                <div className={styles.boxIconInfo}>
                  <div className={styles.boxPrep}>YIELD</div>
                  <div className={styles.box10Mins}>1 loaf, 12 generous servings</div>
                </div>
              </div>
              <Button variant="outlined" startIcon={<AddIcon />} color="error">
                SAVE RECIPE
              </Button>
              <Button variant="outlined" startIcon={<PrintOutlined />} color="error">
                PRINT
              </Button>
            </div>
          </div>
          <div className={styles.productImg}>
            <Image src="/cake.png" alt="Cake" width={500} height={400} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default RecipesPage;
