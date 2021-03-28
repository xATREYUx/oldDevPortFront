import React, { useState, useEffect, useCallback, useRef } from "react";
import SectionOne from "./home-page-components/section-one";
import SectionTwo from "./home-page-components/section-two";
import { useHttpClient } from "../../shared-components/hooks/http-hook";

import { HomePageContainer } from "./home-page.styles";
import Header from "./home-page-components/header";
import Footer from "./home-page-components/footer";
import { PostsContext } from "../../shared-components/context/posts-context";
import { ReactComponent as BlobTop } from "../../theme-assets/images/blobTop.svg";
import { ReactComponent as BubbleBlobs } from "../../theme-assets/images/bubbleBlobs.svg";

const HomePage = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const { sendRequest } = useHttpClient();
  console.log("loadedPosts homePage", loadedPosts);
  const bubblesRef = useRef();

  useEffect(() => {
    if (loadedPosts.length === 0) {
      const getHomePagePosts = async () => {
        console.log("getHomePagePosts fired");
        try {
          const responseData = await sendRequest(
            "http://localhost:5000/api/posts"
          );
          setLoadedPosts(responseData.posts);
        } catch (err) {}
      };
      getHomePagePosts();
    }
  }, [sendRequest, loadedPosts]);

  useEffect(() => {
    const parallax = () => {
      if (bubblesRef.current) {
        let scrolledValue = window.scrollY / 3.5;
        bubblesRef.current.style.transform = `translateY(
      -${scrolledValue + "px"} 
      )`;
        console.log("scrolling...", scrolledValue);
      }
    };
    window.addEventListener("scroll", parallax);
    return () => window.removeEventListener("scroll", parallax);
  }, [bubblesRef]);

  return (
    <PostsContext.Provider
      value={{
        allPosts: loadedPosts,
      }}
    >
      <HomePageContainer>
        <Header />
        <SectionOne posts={loadedPosts} />
        <SectionTwo />
        <Footer />
        <BubbleBlobs className="bubbleBlobs" ref={bubblesRef} />
        <BlobTop className="backBlobBottom" preserveAspectRatio="none" />
      </HomePageContainer>
    </PostsContext.Provider>
  );
};

export default HomePage;
