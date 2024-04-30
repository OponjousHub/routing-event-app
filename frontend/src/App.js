import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import EventPage from "./pages/eventsPage";
import EditEventPage from "./pages/editEventPage";
import NewsLetterPage from "./pages/newsLettePage";
import NewEventPage from "./pages/newEventPage";
import EventDetailPage from "./pages/eventDetailPage";
import EventRootLayout from "./pages/eventRootLayout";
import RootLayout from "./pages/RootLayout";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,

    children: [
      { index: true, element: <HomePage /> },
      { path: "/newsletter", element: <NewsLetterPage /> },
      {
        path: "/events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
