import React from "react";
import PageNation from "../../../components/memoboard/posts/PageNation";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
const PageNationContainer = () => {
  const { lastPage } = useSelector(({ posts }) => ({
    lastPage: posts.lastPage,
  }));

  const [searchParams] = useSearchParams();
  const tag = searchParams.get("tag");
  const page = searchParams.get("page");
  const { nick } = useParams();
  return (
    <PageNation
      page={parseInt(page, 10) || 1}
      tag={tag}
      lastPage={lastPage}
      nick={nick}
    ></PageNation>
  );
};

export default PageNationContainer;
