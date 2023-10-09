import styled from "styled-components";

export const RecentWrapper = styled.section`
  position: relative;
  padding: 150px 40px 40px 40px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: auto;

  //간격 12px
  gap: 30px;
`;

export const RecentTitle = styled.h1`
  position: absolute;
  top: 30px;
  left: 40px;

  color: #d5383f;
  font-size: 4rem;
  line-height: 0.6;

  margin: 0;
`;

export const RecentCard = styled.div`
  width: 100%;

  cursor: pointer;

  .gatsby-image-wrapper {
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: rgba(0, 0, 0, 1) 5px 5px;
  }

  img {
    width: 400px;
    height: 200px;
    object-fit: cover;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding: 16px 16px 8px 16px;

  font-size: 2rem;
  color: #fff;
`;

export const CardDescription = styled.p`
  margin: 0;
  padding: 0 16px 16px 16px;

  color: #fff;
`;
