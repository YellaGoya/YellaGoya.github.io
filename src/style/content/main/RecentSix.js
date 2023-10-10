import styled from "styled-components";

export const RecentWrapper = styled.section`
  position: relative;

  padding: 30px 20px 30px 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;

  border-top: 2px solid #858585;
  border-bottom: 2px solid #858585;

  //간격 12px
  gap: 30px;
`;

export const RecentCard = styled.article`
  position: relative;

  padding-bottom: 30px;
  cursor: pointer;

  .gatsby-image-wrapper {
    width: 100% !important;
    height: 200px !important;
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: rgba(0, 0, 0, 1) 5px 5px;
  }

  img {
    object-fit: cover;
    object-position: center;
  }
`;

export const Categories = styled.div`
  position: absolute;
  margin-top: 14px;

  right: 0;
  bottom: 0;

  display: flex;
  justify-content: right;
  & > span {
    padding: 3px 6px 3px 8px;
    margin: 0 3px;

    color: #fff;
    font-family: inherit;
    font-weight: inherit;
    font-size: inherit;

    background-color: #d5383f;
    border-radius: 15px 5px 5px 5px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  padding: 16px 0 8px 0;

  line-height: 1.2;

  font-size: 2rem;
  color: #fff;
`;

export const CardDescription = styled.p`
  margin: 0;
  padding: 0 0 16px 0;

  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
`;
