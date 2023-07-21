import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import SuperHeroesPage from "./components/Superheroes.page";
import RQSuperHeroesPage from "./components/RQSuperheroes.page";
import HomePage from "./components/Home.page";
import RQSuperHeroPage from "./components/RQSuperHero.page";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DynamicParallelPage from "./components/DynamicParallel.page";
import DependentQueriesPage from "./components/DependentQueries.page";
import PaginatedQueriesPage from "./components/PaginatedQueries.page";
import InfiniteQueriesPage from "./components/InfiniteQueries.page";

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
            <Route path='/rq-super-heroes/:id' element={<RQSuperHeroPage />} />
            <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
            <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage ids={[1, 3]}/>} />
            <Route path='/rq-dependent' element={<DependentQueriesPage email='jovy@abc.com' />} />
            <Route path='/rq-pagination' element={<PaginatedQueriesPage />} />
            <Route path='/rq-infinite' element={<InfiniteQueriesPage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} positon='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App;
