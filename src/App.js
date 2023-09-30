import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react'
import { publicRoutes, privateRoutes } from './routes';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  const isLogined = true;
  const routerF = function (publicRoutes) {
    return (
      publicRoutes.map((route, index) => {
        const Layout = route.layout === null ? Fragment : DefaultLayout;
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />;
      })
    )
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          {
            routerF(publicRoutes)
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
