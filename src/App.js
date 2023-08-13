import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from './routes/Detail';

function App() {

  const URL = process.env.PUBLIC_URL;

  return <Router>
    <Routes>
      <Route path={`${URL}/`} element={<Home/>} />
      <Route path={`${URL}/movie/:id`} element={<Detail/>} />
    </Routes>
  </Router>;
}

export default App;
