import { createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/page";
import { BoardListPage } from "./routes/board/page";
import { BoardLayout } from "./routes/board/layout";
import BoardWritepage from "./routes/board/write/page";

export const routerObj = [
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
];

// const router = createBrowserRouter([
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
//         path: "write",
//         index: true,
//         element: <BoardWritepage />,
//       },
//     ],
//   },
// ]);

// export default router;
