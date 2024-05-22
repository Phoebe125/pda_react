import { Route, Routes, RouterProvider, BrowserRouter, Link } from "react-router-dom";
import { routerObj } from "./main-router";

function renderRoutes(routesObj) {
  return routesObj.map((route) => {
    if (route.children) {
      return (
        <Route
          key={route.path}
          path={route.path}
          index={route.index}
          element={route.element}
        >
          {route.children ? renderRoutes(route.children) : null}
        </Route>
      );
    }
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={route.element}
      />
    );
  });
}

function App() {
  // return <RouterProvider router={MainRouter}></RouterProvider>;
  return (
    <BrowserRouter>
      <div>
        <Link to="/">메인</Link>
      </div>
      <div>
        <Link to="/board">게시글</Link>
      </div>
      <div>
        <Link to="/board/write">글쓰기 페이지</Link>
      </div>

      <Routes>{renderRoutes(routerObj)}</Routes>
    </BrowserRouter>
  );
}

export default App;
