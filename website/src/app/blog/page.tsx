import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BlurCircularIcon from "@mui/icons-material/BlurCircular";
import styles from "@/assets/scss/blog.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Box, Button } from "@mui/material";
import { AddBoxOutlined, PlusOne, PlusOneOutlined, PrintOutlined } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
interface IBlog {
  img: string;
  category_news_name: string;
  news_title: string;
  news_intro: string;
}
const BlogPage = () => {
  const blogs: IBlog[] = [
    {
      img: "kinh-te-1.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "kinh-te-2.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "kinh-te-3.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "kinh-te-4.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "kinh-te-5.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "the-gioi-1.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      img: "kinh-te-7.jpg",
      category_news_name: "Business",
      news_title: "What is Lorem Ipsum",
      news_intro:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
  ];
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center">
        <div className={styles.container}>
          <div className={styles.newsBox}>
            {blogs && blogs.length > 0 ? (
              <React.Fragment>
                {blogs.map((val, idx) => {
                  return (
                    <div className={styles.itemNews} key={`news-item-${idx}`}>
                      <Link href="/">
                        <Image
                          src={`/${val.img}`}
                          width={350}
                          height={200}
                          className={styles.newsImg}
                          alt="News"
                        />
                      </Link>
                      <div className={styles.itemInfo}>
                        <h3 className={styles.titleCategory}>{val.category_news_name}</h3>
                        <h2 className={styles.titleNews}>
                          <Link href="/">{val.news_title}</Link>
                        </h2>
                        <div className={styles.introNews}>{val.news_intro}</div>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </div>
        </div>
      </Box>
    </React.Fragment>
  );
};

export default BlogPage;
