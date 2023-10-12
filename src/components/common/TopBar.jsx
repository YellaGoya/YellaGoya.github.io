import * as r from "react";
import * as s from "style/common/TopBar.js";

import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

import { SearchContext } from "context/search.jsx";
import { TopBarContext } from "context/topbar.jsx";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlareIcon from "@mui/icons-material/Flare";

const TopBar = () => {
  const location = useLocation();
  const { setSearchQuery } = r.useContext(SearchContext);
  const { isFolio, setIsFolio, isMenu, setIsMenu, isSearch, setIsSearch } = r.useContext(TopBarContext);

  const inputRef = r.useRef(null);

  const TitleToggleHandler = () => {
    setIsSearch(false);
    setIsMenu(false);
  };

  const searchToggleHandler = () => {
    if (!isSearch) inputRef.current.focus();
    setIsSearch(!isSearch);
    setIsMenu(false);
  };

  const menuToggleHandler = () => {
    setIsMenu(!isMenu);
    setIsSearch(false);
  };

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search");
    }

    if (event.key === "Escape") {
      setIsSearch(false);
    }
  };

  r.useEffect(() => {
    setIsFolio(location.pathname.startsWith("/folio"));
  }, [location]);

  return (
    <>
      <s.Menu $isMenu={isMenu}>아직 준비중</s.Menu>
      <s.Search $isSearch={isSearch}>
        <input ref={inputRef} placeholder="검색어 입력" type="text" onChange={handleInputChange} onKeyDown={handleKeyPress}></input>
      </s.Search>
      <s.Header>
        <s.TitleWrapper $isFolio={isFolio}>
          <FlareIcon />
          <s.Title to="/" onClick={TitleToggleHandler}>
            malog
          </s.Title>

          <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#858585" }}>:</span>

          <s.Title to="/404" onClick={TitleToggleHandler}>
            folio
          </s.Title>
        </s.TitleWrapper>

        <s.NavWrapper $isMenu={isMenu}>
          <s.NavBtn onClick={searchToggleHandler} $isToggle={isSearch}>
            <ManageSearchIcon />
          </s.NavBtn>
          <s.NavBtn onClick={menuToggleHandler} $isToggle={isMenu}>
            <ListAltIcon />
          </s.NavBtn>
        </s.NavWrapper>
      </s.Header>
    </>
  );
};

export default TopBar;
