import {HeadTitle} from "../styles/global.jsx";
import {Table, TableWrapper} from "../styles/Tables.jsx";

import {useRef} from "react";
import {Search} from "../components/SearchPanel.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {useQuery} from "react-query";
import SettingsServices from "../../services/SettingsServices.jsx";
import OrderServices from "../../services/OrderServices.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import OrderTr from "../components/orders/OrdersTr.jsx";

export default function OrdersPage() {
    const headers = [
        "Id заказа",
        "Наименование",
        "Пользователь",
        "Цена",
        "Дата заявки",
        "Статус",
    ];


    const page = useRef(1);
    const title = useRef("");
    const {data, isLoading, isError, isRefetching, refetch} =
        useQuery("adminorders", () =>
            OrderServices.getAdminOrders(title.current)
        );
    if(data){
        console.log(data)
    }

    return (
        <>
            {/* {isLoading && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )}
            {isRefetching && (
                <PreloaderWrapper>
                    <Preloader/>
                </PreloaderWrapper>
            )} */}
            <HeadTitle>Orders</HeadTitle>
            <Search>
                <input
                    onChange={(event) => (title.current = event.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <button
                    onClick={(event) => {
                        page.current = 1;
                        refetch();
                        event.preventDefault();
                    }}
                >
                    <AiOutlineSearch/>
                </button>
            </Search>
            <TableWrapper>
                <Table>
                    <thead>
                    <tr>
                        {headers.map((title, index) => (
                            <td key={index}>{title}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.data.map((order, index) => (<OrderTr key={index} order={order}/>))}

                    </tbody>
                </Table>
            </TableWrapper>
        </>
    );
}
