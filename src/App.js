import "./App.css";
// News Import
import { NewsContextProvider } from "./component/news-app/NewsContext";
import News from "./component/news-app/News";
import NavBar from "./component/news-app/NavBar";
import Footer from "./component/news-app/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Weather Import
import Weather from "./component/weather-app/Weather";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Link to="/weather">
              <div className="container__weather">
                Click here to know the Weather
              </div>
            </Link>
            <NewsContextProvider>
              <NavBar />
              <News />
              <Footer />
            </NewsContextProvider>
          </Route>
          <Route path="/weather" exact>
            <Weather />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
