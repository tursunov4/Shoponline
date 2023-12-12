import {Pages} from "../components/Pagination";
import {useEffect, useRef, useState} from "react";
import {useQuery} from "react-query";
import {ProductsWrapper} from "../styles/Shop.jsx";
import {HeadTitle} from "../styles/global.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import ProductCardComponent from "../components/shop/ProductCardComponent.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Search} from "../components/SearchPanel.jsx";
import OrderServices from "../../services/OrderServices.jsx";
import ProductServices from "../../services/ProductServices.jsx";
import Filter from "../components/shop/Filter/Filter";
import Shopslider from "../components/shop/Shopslider/Shopslider";
import Productphoto from "../assets/products/mac.png"
export default function ShopPage() {
    const page = useRef(1);
    const title = useRef("");
    const {data, isLoading, isError, refetch, isRefetching, isFetching} =
        useQuery("products", () =>
            ProductServices.getProducts(title.current, page.current), {refetchOnMount: true}
        );

    if (data) {
        console.log(data);
    }

    const prod = {
      title: "Macbook",
      production: "fdsfsdfsd",   
      photo: Productphoto,
      description:"hellO this is macbook i love macc but windows powerful", 
      price:"500$"
    };

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
            <HeadTitle>Shopping List</HeadTitle>
            <Shopslider/>
            <Filter/>
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
            <ProductsWrapper>
                <ProductCardComponent product={prod} />
                <ProductCardComponent product={prod} />
                <ProductCardComponent product={prod} />
                <ProductCardComponent product={prod} />
                <ProductCardComponent product={prod} /> 
                {/* {data &&
                    data.data.results.map((product, index) => (
                        <ProductCardComponent key={index} product={product}/>
                    ))} */}
            </ProductsWrapper>
            {/* {data && (
                <Pages>
                    {data.data.pages.page_previous && (
                        <>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_previous;
                                    refetch();
                                }}
                            >
                                {"<"}
                            </button>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_previous;
                                    refetch();
                                }}
                            >
                                {data.data.pages.page_previous}
                            </button>
                        </>
                    )}
                    <button className="active">{data.data.pages.page_now}</button>
                    {data.data.pages.page_next && (
                        <>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_next;
                                    refetch();
                                }}
                            >
                                {data.data.pages.page_next}
                            </button>
                            <button
                                onClick={() => {
                                    page.current = data.data.pages.page_next;
                                    refetch();
                                }}
                            >
                                {">"}
                            </button>
                        </>
                    )}
                </Pages>
            )} */}
            {/*{data && <Pagination ref={() => refetch()} pages={data.data.pages}/>}*/}
        </>
    );
}
