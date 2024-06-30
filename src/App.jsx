import Home from './Components/Routes/Home';
import Project from './Components/Routes/Projects';
import About from './Components/Routes/About';
import Contact from './Components/Routes/Contact';

import './index.css';
import { Route, RouterProvider, createBrowserRouter ,createRoutesFromElements} from 'react-router-dom';

function App() {

  const router=createBrowserRouter( 
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
