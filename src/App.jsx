import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import ShowCard from "./components/ShowCard";
import { allTVShows } from "./utils";

function App() {
  const [selectedShow, setSelectedShow] = useState(allTVShows[0]); // first show
  const [showSideMenu, setShowSideMenu] = useState(true);

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu);
  }

  function handleCloseMenu() {
    setShowSideMenu(true); // optional if you want menu to stay visible
  }

  return (
    <div className="app-container" style={{ display: "flex" }}>
      <SideNav
        selectedShow={selectedShow}
        setSelectedShow={setSelectedShow}
        showSideMenu={showSideMenu}
        handleCloseMenu={handleCloseMenu}
      />
      <main style={{ flex: 1, padding: "1rem" }}>
        <Header handleToggleMenu={handleToggleMenu} />
        <ShowCard selectedShow={selectedShow} />
      </main>
    </div>
  );
}

export default App;
