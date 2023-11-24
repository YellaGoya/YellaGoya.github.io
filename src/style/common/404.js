import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const NinjaHouse = styled.div`
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Ninja = styled.section`
  position: relative;
`;

export const Eyes = styled.div`
  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%) translateX(-1px);

  height: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--font);
  font-size: 1.4rem;
  font-weight: 500;

  padding: 0px 6px;
  background-color: --font-highlighthighlight;
`;

export const Bunshinsul = styled.div``;

export const Dagger = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: var(--font-highlight)ight);
  text-align: center;
  margin-top: 5px;
  margin-bottom: 0;
`;

export const Silence = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: var(--font);
  text-align: center;
`;
