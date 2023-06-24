import logo from "../../assets/websitelogo.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./header.css";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const headerRoutes = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "/journey",
      name: "The Journey",
    },
    {
      id: 3,
      link: "/team",
      name: "Team",
    },
    {
      id: 4,
      link: "/store",
      name: "Store",
    },
    {
      id: 5,
      link: "/contact",
      name: "Contact",
    },
  ];

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

        <nav className="header-nav">
          {headerRoutes.map((route) => (
            <NavLink activeClassName="active" key={route.id} to={route.link}>
              <span>{route.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="profile">
          <FiUser size={25} />
          <span>Gagan</span>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
