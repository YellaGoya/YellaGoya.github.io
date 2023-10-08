import React from "react";
import * as s from "style/common/TopBar.js";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function TopBar() {
  // Const [isFolio, setIsFolio] = React.useState();
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <s.Box>
        <s.TitleBox>
          <s.Title to="/">Malog</s.Title>
          <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#858585" }}>/</span>
          <s.Title to="/folio">folio</s.Title>
        </s.TitleBox>

        <s.NavBox>
          <s.Btn>
            <ManageSearchIcon />
          </s.Btn>
          <s.Btn onClick={toggleMenuHandler} style={{ color: "#d66d72" }}>
            메뉴
          </s.Btn>
        </s.NavBox>
      </s.Box>
      <s.Menu $toggle={menuOpen} />
    </>
  );
}
