

import {Routes,Route} from "react-router-dom";
import Home from "./com/home";
function App() {

  return (
<Routes>
  {/* <GetChat */}
      <Route path="/" element={<Home />}></Route>
      </Routes>
  );
}

export default App;