


export default function OrderTr({order}){
    return (
        <tr>
              <td>{order.id}</td>
              <td>{order.title}</td>
              <td>{order.price} </td>
              <td>{order.currency}</td>
              <td>{order.created_at}</td>
              <td>
                {order?.status}
              </td>
            </tr>
    )
}