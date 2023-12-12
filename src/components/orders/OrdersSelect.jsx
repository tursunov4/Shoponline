import {useState} from "react";
import {SelectStyled} from "../../styles/global.jsx";
import OrderServices from "../../../services/OrderServices.jsx";

export default function OrdersSelect({id,orderStatusId}) {
    const options = [
        {value: 1, color: "#FFCF01", title: "На рассмотрении"},
        {value: 2, color: "aqua", title: "Забронировано"},
        {value: 3, color: "green", title: "Куплено"},
        {value: 4, color: "gray", title: "Отменено"},
    ];
    const [color, setColor] = useState(options[orderStatusId - 1].color);

    const handleChange = async (e) => {
        setColor(options[e.target.value - 1].color)
        await OrderServices.updateAdminOrder(id, e.target.value)
    }

    return (
        <SelectStyled
            onChange={(e) => handleChange(e)}
            name=""
            id=""
            style={{color: color}}
        >
            {options.map((opt, index) => (
                <option key={index} style={{color: opt.color}} value={opt.value} selected={orderStatusId === opt.value}>
                    {opt.title}
                </option>
            ))}
        </SelectStyled>
    );
}
