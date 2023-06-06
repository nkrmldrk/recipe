import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";

import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Category } from "./pages/category";
import { Recipe } from "./pages/recipe";


function App() {
  function NoMatch() {
    let location = useLocation();
    return(
      <div>
        <h1>Oops!</h1>
        <h2>Sorry, an unexpected error has ocurred.</h2>
        <h5>Does not exist: {location.pathname}</h5>
      </div>
    );
  }
  return (
    <>
      <BrowserRouter basename="/recipe">
        <Header/>
        <main className="container content">
          <Routes>
            <Route path="*" element={<NoMatch />}></Route>
            <Route path="/" element={<Home />}/>
            <Route path="about/" element={<About />}/>
            <Route path="contact/" element={<Contact />}/>
            <Route path="category/:name" element={<Category />}/>
            <Route path="meal/:id" element={<Recipe />}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
