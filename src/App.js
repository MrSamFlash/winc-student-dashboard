import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import AverageChart from "./components/layout/AverageChart";
import StudentChart from "./components/pages/StudentChart";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Route exact path="/" component={AverageChart} />
        <Switch>
          <Route path="/:naam" children={<StudentChart />} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
