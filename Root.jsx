import { App } from "./App";
import {Link} from "react-router-dom"
import {BrowserRouter} from 'react-router-dom'

export function Root(){
  return(
    <BrowserRouter>
      <App />
      <Link to="Shop">Shop |</Link>
      <Link to="Login">Login |</Link>
      <Link to="OurStory">Our Story</Link>
      </BrowserRouter>
  )
}