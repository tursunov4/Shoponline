import OrdersSelect from "./OrdersSelect.jsx";


export default function OrderTr({order}){
    return (
        <tr>
              <td>{order.id}</td>
              <td>{order.product_id_title}</td>
              <td>{order.user_id_title}</td>
              <td>{order.price}$</td>
              <td>{order.created_at}</td>
              <td>
                <OrdersSelect id={order.id} orderStatusId={order.order_status}/>
              </td>
            </tr>
    )
}