import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import styles from "@/assets/scss/shop.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Box, Button } from "@mui/material";
import { AddBoxOutlined, PlusOne, PlusOneOutlined, PrintOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
interface IProduct {
  img: string;
  title: string;
  price: number;
}
export default function ShopPage() {
  const products: IProduct[] = [
    { img: "cake-1.png", title: "Product1", price: 10 },
    { img: "cake-2.png", title: "Product2", price: 20 },
    { img: "cake-3.png", title: "Product3", price: 30 },
    { img: "cake-4.png", title: "Product4", price: 40 },
    { img: "cake-5.png", title: "Product5", price: 50 },
    { img: "cake-6.png", title: "Product6", price: 60 },
    { img: "cake-7.png", title: "Product7", price: 70 },
    { img: "cake-8.png", title: "Product8", price: 80 },
    { img: "cake-9.png", title: "Product9", price: 50 },
    { img: "cake-10.png", title: "Product10", price: 60 },
    { img: "cake-11.png", title: "Product11", price: 70 },
    { img: "cake-12.png", title: "Product12", price: 80 }
  ];
  return (
    <div className={styles.bgWrapper}>
      <Box display="flex" justifyContent="center">
        <div className={styles.container}>
          <div className={styles.products}>
            {products.map((item, idx) => {
              return (
                <div key={`item-${idx}`} className={styles.box}>
                  <Image
                    src={`/${item.img}`}
                    width={200}
                    height={200}
                    alt="product"
                    className={styles.img}
                  />
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.price}>${item.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </div>
  );
}
