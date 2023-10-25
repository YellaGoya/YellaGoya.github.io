import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: relative;

  padding: 30px 20px 30px 20px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;

  border-top: 2px solid #858585;
  border-bottom: 2px solid #858585;

  gap: 30px;
`;

export const ContentTitle = styled.h1`
  position: relative;

  padding: 30px 20px 30px 20px;
  margin: 0;

  color: #d5383f;
  font-size: 4rem;
  line-height: 0.65;

  border-bottom: 2px solid #858585;
`;

export const Noresult = styled.span`
  position: relative;
  width: 356px;

  display: block;
  margin: 0 auto;
  margin-top: 100px;

  color: #fff;
  font-size: 2rem;
  font-weight: 800;
  opacity: 0.5;
`;
