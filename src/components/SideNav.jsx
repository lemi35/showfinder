import { useState } from "react";
import { allTVShows, getShowTitle } from "../utils";

function SideNav(props) {
  const { selectedShow, setSelectedShow, handleCloseMenu, showSideMenu } =
    props;

  const [searchValue, setSearchValue] = useState("");

  const filteredShows = allTVShows.filter((show) => {
    const title = getShowTitle(show);
    return (
      typeof title === "string" &&
      title.toLowerCase().includes(searchValue.toLowerCase())
    );
  });

  return (
    <nav className={" " + (!showSideMenu ? " open" : "")}>
      <div className={"header " + (!showSideMenu ? " open" : "")}>
        <button onClick={handleCloseMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>

        <h1 className="text-gradient">ShowFinder</h1>
        <input
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>
      {filteredShows.map((show, showIndex) => {
        return (
          <button
            onClick={() => {
              setSelectedShow(show);
              handleCloseMenu();
            }}
            key={showIndex}
            className={
              "nav-card " + (show === selectedShow ? " nav-card-selected" : " ")
            }
          >
            {show}
          </button>
        );
      })}
    </nav>
  );
}

export default SideNav;
