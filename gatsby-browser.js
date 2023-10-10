import * as r from "react";
import * as g from "style/Global.js";

import "assets/highlight/prism-dracula.css";

import { Helmet } from "react-helmet";
import TopBar from "components/common/TopBar.jsx";

export const wrapPageElement = ({ element }) => {
  const [isFolio, setIsFolio] = r.useState(false);
  const [isMenu, setIsMenu] = r.useState(false);

  const contentsRef = r.useRef(null);
  r.useEffect(() => {
    if (contentsRef.current) {
      contentsRef.current.scrollTop = 0;
    }
  }, [element]);

  return (
    <>
      <Helmet>
        <title>malog</title>
      </Helmet>
      <g.GlobalStyle />
      <TopBar isFolio={isFolio} setIsFolio={setIsFolio} isMenu={isMenu} setIsMenu={setIsMenu} />
      <g.Contents ref={contentsRef} $isMenu={isMenu}>
        {element}
      </g.Contents>
    </>
  );
};
