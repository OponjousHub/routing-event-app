import { useRouteLoaderData } from "react-router-dom";
function EditEventPage() {
  const data = useRouteLoaderData("editDetailId");
  console.log(data);
  return (
    <>
      <h1>This is Edit Event Page</h1>
    </>
  );
}

export default EditEventPage;
