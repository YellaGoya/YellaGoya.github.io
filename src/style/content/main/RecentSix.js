import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
`;

export const RecentWrapper = styled.div`
  position: relative;

  padding: 20px 20px 20px 20px;

  margin-bottom: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;

  border-top: 2px solid #858585;
  border-bottom: 2px solid #858585;

  //간격 12px
  gap: 30px;
`;

export const RecentTitle = styled.h1`
  position: relative;

  padding: 30px 20px 30px 20px;

  color: #d5383f;
  font-size: 4rem;
  line-height: 0.6;

  margin: 0;
`;

export const RecentCard = styled.div`
  width: 100;

  cursor: pointer;

  .gatsby-image-wrapper {
    border: 1px solid rgba(0, 0, 0, 1);
    box-shadow: rgba(0, 0, 0, 1) 5px 5px;
  }

  img {
    width: 530px;
    height: 200px;
    //witdh 만큼 채우기
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

  font-size: 1.1rem;
  font-weight: 300;
  color: #fff;
`;
