import * as r from "react";
import * as s from "style/common/TopBar.js";

import { useLocation } from "@reach/router";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlareIcon from "@mui/icons-material/Flare";

const TopBar = ({ isFolio, setIsFolio, isMenu, setIsMenu }) => {
  const location = useLocation();

  const watchToggleHandler = () => {
    setIsMenu(!isMenu);
  };

  r.useEffect(() => {
    setIsFolio(location.pathname.startsWith("/folio"));
  }, [location]);

  return (
    <>
      <s.Header>
        <s.TitleWrapper $isFolio={isFolio}>
          <FlareIcon />
          <s.Title to="/">malog</s.Title>

          <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#858585" }}>:</span>

          <s.Title to="/404">folio</s.Title>
        </s.TitleWrapper>

        <s.NavWrapper $isMenu={isMenu}>
          <s.NavBtn>
            <ManageSearchIcon />
          </s.NavBtn>
          <s.NavBtn onClick={watchToggleHandler} $isToggle={isMenu}>
            <ListAltIcon />
          </s.NavBtn>
        </s.NavWrapper>
      </s.Header>
      <s.Menu $isMenu={isMenu}></s.Menu>
    </>
  );
};

export default TopBar;
