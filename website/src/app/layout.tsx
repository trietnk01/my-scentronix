import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/scss/style.min.scss";
import styles from "@/assets/scss/layout.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Box } from "@mui/material";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Box display="flex" justifyContent="center" width="100%">
          <div className={styles.container}>
            <ul className={styles.menu}>
              <li>
                <Link href="/">Shop</Link>
              </li>
              <li>
                <Link href="/recipes">Recipes</Link>
                <ul>
                  <li>
                    <Link href={"/"}>Categories</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Collections</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Resources</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/learn">Learn</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
                <ul>
                  <li>
                    <Link href={"/"}>Categories</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Collections</Link>
                  </li>
                  <li>
                    <Link href={"/"}>Resources</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
        </Box>
        <div className={styles.banner}></div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
