import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page";
import { BoardListPage } from "./routes/board/page";
import { BoardLayout } from "./routes/board/layout";
import BoardWritepage from "./routes/board/write/page";
import BoardDetailPage from "./routes/board/detail/page";
import SignupPage  from "./routes/user/signup";
import LoginPage from "./routes/user/login";

// export const routerObj = [
//   {
//     path: "/",
//     element: <MainPage />,
//     index: true,
//   },
//   {
//     path: "/board",
//     element: <BoardLayout />,
//     children: [
//       {
//         path: "",
//         index: true,
//         element: <BoardListPage />,
//       },
//       {
//         // parameter 전달받기
//         path: ":boardId",
//         element: <BoardDetailPage />,
//       },
//       {
//         path: "write",
//         index: true,
//         element: <BoardWritepage />,
//       },
//     ],
//   },
//   {
//     path: "/user",
//     element: <BoardLayout />,
//     children: [
//       { path: "login", index: true, element: <LoginPage /> },
//       { path: "signup", index: true, element: <SignupPage /> },
//     ],
//   },
// ];

const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    index: true,
  },
  {
    path: "/board",
    element: <BoardLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <BoardListPage />,
      },
      {
        path: "write",
        index: true,
        element: <BoardWritepage />,
      },
    ],
  },
]);

export default MainRouter;
