import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./components/AddContact";
import ListContacts from "./components/ListContacts";
import ViewContact from "./components/ViewContact";
import EditContact from "./components/EditContact";
import Header from "./pages/Header";
import SavePhone from "./components/SavePhone";
import AddAddress from "./components/AddAddress";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route  path="/" element={<Main />} />
          <Route path="/listContacts" element={<ListContacts />} />
          <Route exact path="/" element={<Main />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/savePhone" element={<SavePhone />} />
          <Route path="/saveAdd" element={<AddAddress />} />
          <Route path="/viewContact" element={<ViewContact />} />
          <Route path="/editContact" element={<EditContact />} />
        </Routes>
    </div>
  );
}

export default App;
