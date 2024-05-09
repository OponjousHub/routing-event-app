import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import EditEventPage from "./pages/editEventPage";
import NewsLetterPage, {
  action as newsLetterAction,
} from "./pages/newsLettePage";
import NewEventPage from "./pages/newEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./pages/eventDetailPage";
import EventRootLayout from "./pages/eventRootLayout";
import RootLayout from "./pages/RootLayout";
import EventList, { loader as eventsLoader } from "./pages/eventListPage";
import { action as manipulatedEventAction } from "./components/eventForm";

import ErrorPage from "./pages/errorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/newsletter",
        element: <NewsLetterPage />,
        action: newsLetterAction,
      },
      {
        path: "/events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventList />, loader: eventsLoader },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulatedEventAction,
            children: [{ path: "new", element: <NewEventPage /> }],
          },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "editDetailId",
            children: [
              {
                path: "",
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: "new",
                element: <NewEventPage />,
                action: manipulatedEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulatedEventAction,
                children: [
                  {
                    path: "new",
                    element: <NewEventPage />,
                    action: manipulatedEventAction,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
