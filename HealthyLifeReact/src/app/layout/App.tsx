import { observer } from "mobx-react-lite";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

export default observer(function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
});
