import "./App.css";
import React from "react";
import Header from "./components/header/header";
import WelcomeToDashboard from "./components/welcomeToDashboard/welcomeToDashboard";
import RecentProjects from "./components/recentProjects/recentProjects";
import Tasks from "./components/Tasks/Tasks";
import LoadMore from "./components/load more/loadMore";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <WelcomeToDashboard></WelcomeToDashboard>
      <RecentProjects></RecentProjects>
      <Tasks></Tasks>
      <LoadMore></LoadMore>
      <Footer></Footer>
    </div>
  );
}

export default App;
