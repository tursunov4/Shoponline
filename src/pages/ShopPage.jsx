import {useEffect,  useState} from "react";
import {ProductsWrapper} from "../styles/Shop.jsx";
import {HeadTitle} from "../styles/global.jsx";
import {Preloader, PreloaderWrapper} from "../styles/Preloader.jsx";
import ProductCardComponent from "../components/shop/ProductCardComponent.jsx";
import {AiOutlineSearch} from "react-icons/ai";
import {Search} from "../components/SearchPanel.jsx";
import axios from "axios"
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
    const [totalPage , setTotalpage] = useState("")
    const [activenum, setActiveNUm] = useState(1);
    const [paginate, setPaginate] = useState(true);
    const [selectorga ,setSelectorga] = useState("")  
    const [refresh , setRefresh] = useState(false)
    const getOffice =()=>{
        axios.get( server_url + "/api/v1/office/list/").then((res)=>{
            setOficeOption(res.data)
        }).catch((err)=>{
            console.log(err)
        })
        axios.get( server_url +"/api/v1/organization/list/").then((res)=>{
            setOrganization(res.data)
            
        }).catch((err)=>{
            console.log(err)
        })
    }

     const getData = ()=>{
        setIsLoading(true)
      axios.get( server_url +`/api/v1/product/list/?title=${searchDebance}&office=${selectoffice}&organization=${selectorga}&limit=10&offset=${(activenum - 1) * 10}`).then((res)=>{
         setData(res.data.results)
        setIsLoading(false)
        setPaginate(true);
        setTotalpage(Math.ceil(res.data.count / 10))
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
    }, [searchDebance ,selectoffice ,selectorga ,refresh])

    const getPageNumbers = (id) => {
        const pageNumbers = [];
        for (let i = 1; i <= id; i++) {
          pageNumbers.push(i);
        }
        return pageNumbers;
      };
      const changeActiveNum = (id) => {
        setActiveNUm(id);
        setRefresh(!refresh)
        window.scrollTo(0,0)
      };

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
            <div>
            { paginate && (
            <div className="paginate__wrap">
              {totalPage !== "" &&
                getPageNumbers(totalPage).map((page ,index) => (
                  <button
                    key={index}                
                    onClick={() => changeActiveNum(page)}
                    className={activenum === page ? "paginate__btn-active paginate__btn" : "paginate__btn"}
                  >
                    {page}
                  </button>
                ))}
            </div>
          )} 
            </div>
          
        </>
    );
}
