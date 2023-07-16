import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Signup />
        <Login />
        <Logout />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
