import { SidebarRoutes } from "./SidebarRoutes.jsx";
import { SideBarHeader5, SideBarLink } from "../../styles/SidebarStyled.jsx";

export default function SideBarLinks(props) {
  return (
    <div>
      {Object.values(SidebarRoutes()).map((list, index) => (
        <div key={index}>
          <SideBarHeader5 open={props.open}>{list.title}</SideBarHeader5>
          {list.links.map((link, index) => (
            <SideBarLink key={index} open={props.open} to={link.path}>
              <h5>{link.title}</h5>
              <span>{link.icon}</span>
            </SideBarLink>
          ))}
        </div>
      ))}
    </div>
  );
}
