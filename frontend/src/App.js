import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import EditEventPage from "./pages/editEventPage";
import NewsLetterPage from "./pages/newsLettePage";
import NewEventPage, { action as newEventAction } from "./pages/newEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/eventDetailPage";
import EventRootLayout from "./pages/eventRootLayout";
import RootLayout from "./pages/RootLayout";
import EventList, { loader as eventsLoader } from "./pages/eventListPage";

import ErrorPage from "./pages/errorPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/newsletter", element: <NewsLetterPage /> },
      {
        path: "/events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventList />, loader: eventsLoader },
          { path: "new", element: <NewEventPage />, action: newEventAction },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          {
            path: ":eventId/edit",
            element: <EditEventPage />,
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
