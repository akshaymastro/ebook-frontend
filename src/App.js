import "./sass/index.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/pages/Login";
import EbookListing from "./components/pages/Ebook-listing";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/listing" element={<EbookListing />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
