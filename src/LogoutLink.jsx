import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a href="#" onClick={handleClick} className="nav-link">
      Logout
    </a>
    // <button type="submit" onClick={handleClick}>
    //   Logout
    // </button>
  );
}
