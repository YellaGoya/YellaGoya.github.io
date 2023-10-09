import * as s from "style/common/TopBar.js";

// 라이브러리
import { useLocation } from "@reach/router";

// 컴포넌츠
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlareIcon from "@mui/icons-material/Flare";

export default function TopBar({ isMenu, setIsMenu }) {
  const location = useLocation();
  // Const [isFolio, setIsFolio] = React.useState();

  const watchToggleHandler = () => {
    setIsMenu(!isMenu);
  };

  return (
    <>
      <s.Header>
        <s.TitleWrapper $here={location.pathname}>
          <FlareIcon />
          <s.Title to="/">malog</s.Title>

          <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#858585" }}>:</span>

          <s.Title to="/folio">folio</s.Title>
        </s.TitleWrapper>

        <s.NavWrapper>
          <s.NavBtn>
            <ManageSearchIcon />
          </s.NavBtn>
          <s.NavBtn onClick={watchToggleHandler} $isToggle={isMenu}>
            <ListAltIcon />
          </s.NavBtn>
        </s.NavWrapper>
      </s.Header>
      <s.Menu $isMenu={isMenu} />
    </>
  );
}
