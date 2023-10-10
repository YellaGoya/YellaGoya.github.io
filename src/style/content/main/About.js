import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
`;

export const AboutWrapper = styled.div`
  position: relative;

  padding: 20px 20px 20px 20px;

  margin-bottom: 100px;

  border-bottom: 2px solid #858585;

  //간격 12px
  gap: 30px;
`;

export const AboutTitle = styled.span`
  font-size: 10vw;
  font-weight: 800;

  line-height: 0.7;
  color: #fff;

  // 텍스트에 그림자 효과
  /* text-shadow: 5px 5px 0 rgba(0, 0, 0, 1); */

  & h1 {
    margin: 10px 0 20px 0;
  }
`;
