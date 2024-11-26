import Preview from '../pages/preview';
import ErrorPage from './error-page'


import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: <Preview />,
  },


]);