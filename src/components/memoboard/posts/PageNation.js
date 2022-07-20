import React from "react";
import styled from "styled-components";
import qs from "qs";

import Button from "../../common/Button";
const PageNationBlock = styled.div`
  background: white;
  width: 100%;
  height: 5rem;
  position: fixed;
  bottom: 0;

  /* margin: 0 auto; */
  /* bottom: 0; */
  /* text-align: center; */
  /* margin-bottom: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const buildLink = ({ page, tag, nick }) => {
  const query = qs.stringify({ page, tag });
  return nick ? `/@${nick}?${query}` : `?${query}`;
};
const Page = styled.div`
  font-size: 1.125rem;
  margin: 0 2rem;
`;
const PageNation = ({ page, tag, nick, lastPage }) => {
  return (
    <PageNationBlock>
      <Button
        disable={page === 1}
        to={page === 1 ? undefined : buildLink({ page: page - 1, tag, nick })}
      >
        이전
      </Button>
      <Page>{page}</Page>
      <Button
        disable={page === lastPage}
        to={
          page === lastPage
            ? undefined
            : buildLink({ page: page + 1, tag, nick })
        }
      >
        다음
      </Button>
    </PageNationBlock>
  );
};

export default PageNation;
