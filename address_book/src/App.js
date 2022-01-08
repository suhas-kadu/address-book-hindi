import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactNavbar from "./components/Navbar/ReactNavbar";
import InsertPage from "./views/InsertPage";
import HomePage from "./views/HomePage";
import Route from "./routing/Route";
import InsertedRecord from "./views/InsertedRecord";

const App = () => {
  return (
    <>
      <ReactNavbar />
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/insert">
        <InsertPage />
      </Route>
      <Route path="/insertedrecord">
        <InsertedRecord />
      </Route>
    </>
  );
};

export default App;
