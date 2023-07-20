import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import SuperHeroesPage from "./components/Superheroes.page";
import RQSuperHeroesPage from "./components/RQSuperheroes.page";
import HomePage from "./components/Home.page";

function App() {
const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/super-heroes'>Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/super-heroes' element={<SuperHeroesPage />} />
            <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} positon='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;
