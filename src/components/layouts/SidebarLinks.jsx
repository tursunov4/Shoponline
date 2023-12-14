// import { SidebarRoutes } from "./SidebarRoutes.jsx";
import { SideBarHeader5, SideBarLink  , SideBarLinka} from "../../styles/SidebarStyled.jsx";
import { AiOutlineHistory, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { TbMessage2Exclamation } from "react-icons/tb";
import { ImExit } from "react-icons/im";

export default function SideBarLinks(props) {
  const token = sessionStorage.getItem("token")
  return (
    <div>
      {/* {Object.values(SidebarRoutes()).map((list, index) => (
        <div key={index}>
          <SideBarHeader5 open={props.open}>{list.title}</SideBarHeader5>
          {list.links.map((link, index) => (
            <SideBarLink key={index} open={props.open} to={link.path}>
              <h5>{link.title}</h5>
              <span>{link.icon}</span>
            </SideBarLink>
          ))}
        </div>
      ))} */}
     
     <SideBarHeader5 open={props.open} >Data</SideBarHeader5>
            <SideBarLink  open={props.open} to={"/"}>
              <h5>Магазин</h5>
              <span><AiOutlineShoppingCart /></span>
            </SideBarLink>
            {
              token &&
              <>
               <SideBarHeader5 open={props.open} >Заявки</SideBarHeader5>
            <SideBarLink open={props.open} to={"/orders"}>
              <h5>Заявки</h5>
              <span><TbMessage2Exclamation /></span>
            </SideBarLink>
            
            <SideBarHeader5 open={props.open} >История покупок</SideBarHeader5>
            <SideBarLink open={props.open} to={"/my-history"}>
              <h5>История покупок</h5>
              <span><AiOutlineHistory /></span>
            </SideBarLink>
              </>
            }
    
       
            <SideBarHeader5 open={props.open} >Contacts</SideBarHeader5>
            <SideBarLink open={props.open} to={"/contact-us"}>
              <h5>Связь с нами</h5>
              <span><BsFillPersonLinesFill  /></span>
            </SideBarLink>
            {
              token ? <>
              <SideBarHeader5 open={props.open} >Log</SideBarHeader5>
              <SideBarLinka open={props.open} href="https://admin.mytestproject.click/accounts/okta/login/">    
                <h5>Выход</h5>
              <span><ImExit /></span>          
              </SideBarLinka>
              </> :<>
              <SideBarHeader5 open={props.open} >Log</SideBarHeader5>
            <SideBarLinka open={props.open} href="https://admin.mytestproject.click/accounts/okta/login/">    
            <h5>Вход</h5>
              <span><SlLogin /></span>          
              </SideBarLinka>
              </>
            }
          
    </div>
  );
}
