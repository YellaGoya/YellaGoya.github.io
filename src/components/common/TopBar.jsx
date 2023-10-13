import * as r from "react";
import * as s from "style/common/TopBar.js";

import { useLocation } from "@reach/router";
import { navigate } from "gatsby";
<<<<<<< HEAD
=======

>>>>>>> adf0cfee5bd25b47515316bd337ff9d168b2a4f3
import { SearchContext } from "context/search.jsx";
import { TopBarContext } from "context/topbar.jsx";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FlareIcon from "@mui/icons-material/Flare";

const TopBar = () => {
  const location = useLocation();
<<<<<<< HEAD
  const { searchQuery, setSearchQuery } = r.useContext(SearchContext);
=======
  const { setSearchQuery } = r.useContext(SearchContext);
  const { isFolio, setIsFolio, isMenu, setIsMenu, isSearch, setIsSearch } = r.useContext(TopBarContext);

>>>>>>> adf0cfee5bd25b47515316bd337ff9d168b2a4f3
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

<<<<<<< HEAD
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/search"); // 엔터 키를 눌렀을 때 '/search' 경로로 이동
    }

    if (e.key === "Escape") {
      setIsSearch(false); // ESC 키를 눌렀을 때 검색창 닫기
=======
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate("/search");
    }

    if (event.key === "Escape") {
      setIsSearch(false);
>>>>>>> adf0cfee5bd25b47515316bd337ff9d168b2a4f3
    }
  };

  r.useEffect(() => {
    setIsFolio(location.pathname.startsWith("/folio"));
  }, [location]);

  r.useEffect(() => {
    if (!isSearch) {
      // 0.1초에 하나씩 searchQuery를 지워줌 모두 지우면 종료
      const interval = setInterval(() => {
        setSearchQuery((prev) => {
          if (prev.length === 1) {
            clearInterval(interval);
            return "";
          }

          return prev.slice(0, -1);
        });
      }, 50);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isSearch]);

  return (
    <>
      <s.Menu $isMenu={isMenu}>아직 준비중</s.Menu>
      <s.Search $isSearch={isSearch}>
<<<<<<< HEAD
        <input
          ref={inputRef}
          placeholder="검색어 입력"
          value={searchQuery}
          type="text"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        ></input>
=======
        <input ref={inputRef} placeholder="검색어 입력" type="text" onChange={handleInputChange} onKeyDown={handleKeyPress}></input>
>>>>>>> adf0cfee5bd25b47515316bd337ff9d168b2a4f3
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
