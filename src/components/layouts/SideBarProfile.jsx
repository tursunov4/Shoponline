import Avatar from "../../assets/user.png";
import {SideBarProfileWrapper} from "../../styles/SidebarStyled.jsx";
import UserServices from "../../../services/UserServices.jsx";


export function SideBarProfile(props) {
    const {firstName, lastName, amount_of_deals} = UserServices.getUserInfo()
    return (
        <>
            <SideBarProfileWrapper open={props.open}>
                <div>
                    <img src={Avatar} alt=""/>
                </div>
                <h2>{firstName} {lastName}</h2>
                <h5>Limit: {amount_of_deals}</h5>
            </SideBarProfileWrapper>
        </>
    )
}
