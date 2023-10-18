import { useEffect, useContext, useRef } from "react";
import { useLocation } from "@reach/router";
import { navigate } from "gatsby";

import { SearchContext } from "context/search.jsx";
import { CategoryContext } from "context/category.jsx";
import { TopBarContext } from "context/topbar.jsx";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlareIcon from "@mui/icons-material/Flare";
import LogoutIcon from "@mui/icons-material/Logout";
import * as s from "style/common/TopBar.js";
const TopBar = ({ menuHeight, setMenuHeight }) => {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { setCategory } = useContext(CategoryContext);
  const { isMenu, setIsMenu, isSearch, setIsSearch } = useContext(TopBarContext);

  const inputRef = useRef(null);
  const menuRef = useRef(null);

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

  const handleCategories = (category) => {
    setCategory(category);
    navigate("/categories");
  };

  useEffect(() => {
    if (location.pathname.startsWith("/search")) inputRef.current.focus();
    else setSearchQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setMenuHeight(entry.contentRect.height);
      }
    });

    if (menuRef.current) {
      resizeObserver.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        resizeObserver.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <>
      <s.Menu ref={menuRef} $isMenu={isMenu} $menuHeight={menuHeight}>
        <s.Category onClick={() => handleCategories("")}>전체</s.Category>
        <s.Category onClick={() => handleCategories("Javascript")}>Javascript</s.Category>
        <s.Category onClick={() => handleCategories("gatsby")}>gatsby</s.Category>
      </s.Menu>
      <s.Search $isSearch={isSearch}>
        <input
          ref={inputRef}
          value={searchQuery}
          placeholder="검색어 입력"
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
        ></input>
      </s.Search>
      <s.Header>
        <s.TitleWrapper $isFolio={location.pathname.startsWith("/folio")}>
          {location.pathname.startsWith("/post") ? <LogoutIcon onClick={() => navigate(-1)} style={{ cursor: "pointer" }} /> : <FlareIcon />}
          <s.Title to="/" onClick={TitleToggleHandler}>
            malog
          </s.Title>

          <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#858585" }}>:</span>

          <s.Title to="/404" onClick={TitleToggleHandler}>
            folio
          </s.Title>
        </s.TitleWrapper>

        <s.NavWrapper $isMenu={isMenu}>
          <s.NavBtn onClick={searchToggleHandler} $isToggle={isSearch} id="search" title="Search">
            <ManageSearchIcon />
          </s.NavBtn>
          <s.NavBtn onClick={menuToggleHandler} $isToggle={isMenu} id="menu" title="Menu">
            <ListAltIcon />
          </s.NavBtn>
        </s.NavWrapper>
      </s.Header>
    </>
  );
};

export default TopBar;
