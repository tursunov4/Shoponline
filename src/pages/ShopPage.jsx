import {useEffect,  useState} from "react";
import {ProductsWrapper} from "../styles/Shop.jsx";
import {HeadTitle} from "../styles/global.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import ProductCardComponent from "../components/shop/ProductCardComponent.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Search} from "../components/SearchPanel.jsx";
import Filter from "../components/shop/Filter/Filter";
import axios from "axios"
import http from "../axios"
import { useDebounce } from "../hooks/useDebance.jsx";
import Costumselect from "../components/shop/Coustumselect/Coustumselect.jsx";
import { server_url } from "../../services/conf.jsx";

export default function ShopPage() {
    const [data , setData] = useState([])
    const [isLoading ,setIsLoading] = useState(false)
    const [search ,setSearch] = useState("")
    const searchDebance = useDebounce(search , 500)
    const [officeOption , setOficeOption] = useState([])
    const [selectoffice ,setSelectoffice] = useState("")
    const [oraga ,setOrganization] = useState([])
    const [selectorga ,setSelectorga] = useState("")  
    const pl ="dadfa"  
    const getOffice =()=>{
        axios.get( server_url + "/api/v1/office/list/").then((res)=>{
            console.log(res.data)       
            setOficeOption(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get( server_url +"/api/v1/organization/list/").then((res)=>{
            console.log(res.data)
            setOrganization(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

     const getData = ()=>{
        setIsLoading(true)
      axios.get( server_url +`/api/v1/product/list/?title=${searchDebance}&office=${selectoffice}&organization=${selectorga}`).then((res)=>{
        console.log(res.data.results )
         setData(res.data.results)
        setIsLoading(false)
      }).catch((err)=>{
        console.log(err)
        setIsLoading(false)
      }) 
     }

    useEffect(()=>{
    getOffice()
    },[])
    useEffect(()=>{
    getData()
    }, [searchDebance ,selectoffice ,selectorga])

    return (
        <>
            {
                isLoading && (
                   <PreloaderWrapper>
                    <Preloader/>
                   </PreloaderWrapper>
                )
            }
            <HeadTitle>Shopping List</HeadTitle>      
             <div className="filter__wrapper">
                <Costumselect plecholders={"Choose office"} options={officeOption} selected={selectoffice} setSelected={setSelectoffice}/>
                <Costumselect plecholders={"Choose organizations"} options={oraga} selected={selectorga} setSelected={setSelectorga}/>
             </div>
            <Search>
                <input
                    onChange={(e)=>setSearch(e.target.value)}
                    type="text"
                    placeholder="Search..."
                />
                <button   >
                    <AiOutlineSearch/>
                </button>
            </Search>
            <ProductsWrapper>
             
               {
                data?.map((item) =>(
                   <>
                     <ProductCardComponent product={item}/>
                   </>
                ))
               }
            </ProductsWrapper>
          
        </>
    );
}
