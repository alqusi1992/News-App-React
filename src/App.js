import "./App.css";
import { NewsContextProvider } from "./component/news-app/NewsContext";
import News from "./component/news-app/News";
function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;
