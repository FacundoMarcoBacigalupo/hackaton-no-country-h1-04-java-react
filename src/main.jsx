import { DoctorProvider } from "./context/DoctorContext.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DoctorProvider>
    <App />
  </DoctorProvider>
);