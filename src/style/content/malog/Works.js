import styled from 'styled-components';

export const WorksWrapper = styled.section`
  position: relative;

  padding: 30px 20px 0 20px;
  border-bottom: 2px solid var(--border);

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto;

  gap: 30px;
`;
