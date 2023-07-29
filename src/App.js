import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
//pages folder
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact, { contactAction } from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Houses, { housesLoader } from "./pages/houses/Houses";
import HouseDetail, { houseDetailLoader } from "./pages/houses/HouseDetail";
import HouseError from "./pages/houses/HouseError";
//layouts folder
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import HouseLayout from "./layouts/HouseLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}/>
          <Route path="contact" element={<Contact/>} action={contactAction}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
        <Route path="houses" element={<HouseLayout/>} errorElement={<HouseError/>}>
          <Route index element={<Houses/>} loader={housesLoader}/>
          <Route path=":id" element={<HouseDetail/>} loader={houseDetailLoader}/>
        </Route>
    </Route>
  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />      
    </>
  );
}

export default App;
