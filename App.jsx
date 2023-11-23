import { Shop } from "./HomePage";
import { Login } from "./Login";
import { OurStory } from "./OurStory";
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
export function App(){
  return(
    <Routes>
      <Route path="shop" element={<Shop />} />
      <Route path="login" element={<Login />} />
      <Route path="ourstory" element={<OurStory />} />
      <Route path="*" element={<div>
        <p>Not Found</p>
      </div> }
      />
    </Routes>
)
}
