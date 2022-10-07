import { List } from "@mui/material";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logo.PNG";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContactMailIcon from "@mui/icons-material/ContactMail";

function Sidebar() {
  const Lists = [
    {
      id: 1,
      title: "Dashboard",
      icon: <ion-icon name="home"></ion-icon>,
      address: "/",
    },
    {
      id: 2,
      title: "ClassRoom ",
      icon: <ion-icon name="clipboard"></ion-icon>,
      address: "Staff",
      icon2: <ArrowForwardIosIcon className="class-room-icon" />,
    },
    {
      id: 3,
      title: "Classroom Rosters",
      icon: <ion-icon name="bookmarks-outline"></ion-icon>,
      address: "EnrollmentTwo",
      icon2: <ArrowForwardIosIcon className="roster-icon" />,
    },
    {
      id: 4,
      title: "Classroom Actions",
      icon: <ion-icon name="contract-outline"></ion-icon>,
      address: "classroom-actions",
      icon2: <ArrowForwardIosIcon className="roster-icon" />,
    },
    {
      id: 5,
      title: "Messaging",
      icon: <ion-icon name="chatbubble-ellipses-outline"></ion-icon>,
      address: "Messages",
    },
    {
      id: 6,
      title: "Contact",
      icon: <ContactMailIcon />,
      address: "Contacts",
    },
    {
      id: 7,
      title: "Staff management",
      icon: <ion-icon name="people-outline"></ion-icon>,
      address: "StaffRoster",
      icon2: <ArrowForwardIosIcon className="roster-icon" />,
    },
    {
      id: 8,
      title: "Menus and Calender",
      icon: <ion-icon name="calendar-outline"></ion-icon>,
      address: "NewCalander",
    },
    {
      id: 9,
      title: "Reports",
      icon: <ion-icon name="browsers-outline"></ion-icon>,
      address: "Reports",
    },
    {
      id: 10,
      title: "Parents Sign In",
      icon: <ion-icon name="log-in-outline"></ion-icon>,
      address: "Parent",
      icon2: <ArrowForwardIosIcon className="parent-icon" />,
    },
    {
      id: 11,
      title: "Logins and configuration",
      icon: <ion-icon name="log-in-outline"></ion-icon>,
      address: "Cards",
    },
    {
      id: 12,
      title: "Max Mallidius",
      icon: <ion-icon name="log-in-outline"></ion-icon>,
      address: "Max",
      icon2: <ArrowForwardIosIcon className="parent-icon" />,
    },
    {
      id: 13,
      title: "Help Center",
      icon: <ion-icon name="help-outline"></ion-icon>,
      address: "Help",
    },
    {
      id: 14,
      title: "Management",
      icon: <ion-icon name="help-outline"></ion-icon>,
      address: "Management",
      icon2: <ArrowForwardIosIcon className="parent-icon" />,
    },
  ];
  const handleClick = () => {};
  return (
    <div>
      <div className="container">
        <div className="navigation">
          <ul>
            <li className="logo-container">
              <a href="#">
                <span className="logo">
                  <img src={logo} width="100%" height="100%" />
                </span>
              </a>
            </li>
            {Lists.map((list, index) => {
              return (
                <li id={list.id} key={index} onClick={() => handleClick(index)}>
                  <NavLink to={list.address} className="nww">
                    <span className="icon">{list.icon}</span>
                    <span className="title">{list.title}</span>
                    <span className="icon2">{list.icon2}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
