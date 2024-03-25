import { useEffect, useContext, useRef } from 'react';
import { useLocation } from '@reach/router';
import { navigate } from 'gatsby';

import { SearchContext } from 'context/search.jsx';
import { CategoryContext } from 'context/category.jsx';
import { TopBarContext } from 'context/topbar.jsx';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FlareIcon from '@mui/icons-material/Flare';
// import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as s from 'style/common/TopBar.js';
const TopBar = ({ menuHeight, setMenuHeight }) => {
  const location = useLocation();
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { setCategory } = useContext(CategoryContext);
  const { isMenu, setIsMenu, isSearch, setIsSearch, isFocus } = useContext(TopBarContext);

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
    if (event.key === 'Enter') {
      navigate('/search');
    }

    if (event.key === 'Escape') {
      setIsSearch(false);
    }
  };

  const handleCategories = (category) => {
    setCategory(category);
    navigate('/categories');
  };

  useEffect(() => {
    if (location.pathname.startsWith('/search')) inputRef.current.focus();
    else setSearchQuery('');
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
      <s.Menu ref={menuRef} $isMenu={isMenu} $isFocus={isFocus} $menuHeight={menuHeight}>
        <s.Category onClick={() => handleCategories('')}>전체</s.Category>
        <s.Category onClick={() => handleCategories('개발 환경')}>개발 환경</s.Category>
        <s.Category onClick={() => handleCategories('Web')}>Web</s.Category>
      </s.Menu>
      <s.Search $isSearch={isSearch} $isFocus={isFocus}>
        <input ref={inputRef} value={searchQuery} placeholder="검색어 입력" type="text" onChange={handleInputChange} onKeyDown={handleKeyPress} />
      </s.Search>
      <s.Header $isFocus={isFocus}>
        <s.TitleWrapper $isFolio={location.pathname.startsWith('/folio')}>
          {location.pathname.startsWith('/post') ? <ArrowBackIosNewIcon style={{ cursor: 'pointer' }} onClick={() => navigate(-1)} /> : <FlareIcon />}
          <s.Title id="malog-title" to="/" onClick={TitleToggleHandler}>
            malog
          </s.Title>

          <span>:</span>

          <s.Title id="folio-title" to="/folio" onClick={TitleToggleHandler}>
            folio
          </s.Title>
        </s.TitleWrapper>

        <s.NavWrapper $isMenu={isMenu}>
          <s.NavBtn $isToggle={isSearch} id="search" title="Search" onClick={searchToggleHandler}>
            <ManageSearchIcon />
          </s.NavBtn>
          <s.NavBtn $isToggle={isMenu} id="menu" title="Menu" onClick={menuToggleHandler}>
            <ListAltIcon />
          </s.NavBtn>
        </s.NavWrapper>
      </s.Header>
    </>
  );
};

export default TopBar;
