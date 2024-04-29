import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage";
import EventPage from "./pages/eventsPage";
import EditEventPage from "./pages/editEventPage";
import NewsLetterPage from "./pages/newsLettePage";
import NewEventPage from "./pages/newEventPage";
import EventDetailPage from "./pages/eventDetailPage";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/edit", element: <EditEventPage /> },
  { path: "/new", element: <NewEventPage /> },
  { path: "/newsletter", element: <NewsLetterPage /> },
  { path: "/events", element: <EventPage /> },
  { path: "/detail", element: <EventDetailPage /> },
]);

function App() {
  return (
    <RouterProvider router={router}>
      {/* <HomePage />
      <EventPage /> */}
    </RouterProvider>
  );
}

export default App;
