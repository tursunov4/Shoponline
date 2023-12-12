import {Discount, DiscountWrapper, ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import UserServices from "../../../services/UserServices.jsx";
import ProductServices from "../../../services/ProductServices.jsx";
import OrderServices from "../../../services/OrderServices.jsx";
import {useNavigate} from "react-router-dom"
import  { useRef } from 'react';
import "./product.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductCardComponent({product}) {
    const [modalActive, setModalActive] = useState(false);
    const [buttonActive, setButtonActive] = useState(false);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigate = useNavigate();
    const handleClick = (productId, orderStatus) => {
        OrderServices.createOrder(productId, orderStatus)
        setModalActive(false)
        navigate('/my-history')


    }

    return (<ProductCard onClick={() => setModalActive(!modalActive)}>
        {product.discount > 0 && <DiscountWrapper>
            <Discount>{product.discount}%</Discount>
        </DiscountWrapper>}
        <img src={product.photo} alt=""/>
        <h2>{product.title}</h2>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
        <Modal active={modalActive} setActive={setModalActive}>
            <ProductCard>
            <Swiper
        style={{
          '--swiper-navigation-color': '#1F2A40',
          '--swiper-pagination-color': '#1F2A40',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="modalslide1"
      >
        <SwiperSlide>
        <img className="modal_img" src={product.photo} alt=""/>
        </SwiperSlide>

        <SwiperSlide>
        <img className="modal_img" src={product.photo} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="modal_img" src={product.photo} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img className="modal_img" src={product.photo} alt=""/>
        </SwiperSlide>

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="modalslide2"
      >
        <SwiperSlide>
        <img className="modalslide2__img" src={product.photo} alt=""/>
        </SwiperSlide>
        
        <SwiperSlide>
        <img className="modalslide2__img" src={product.photo} alt=""/>
        </SwiperSlide>
        
        
        <SwiperSlide>
        <img className="modalslide2__img" src={product.photo} alt=""/>
        </SwiperSlide>
        
        
        <SwiperSlide>
        <img className="modalslide2__img" src={product.photo} alt=""/>
        </SwiperSlide>
        
      </Swiper>
                
                {/* <img src={product.photo} alt=""/> */}
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </ProductCard>
            <ModalButtonsWrapper active={buttonActive}>
                <button onClick={() => handleClick(product.id, 2)} onMouseOver={() => setButtonActive(true)}>
                    Забронировать
                </button>
                <button onClick={() => handleClick(product.id, 1)} onMouseOver={() => setButtonActive(false)}>
                    Купить
                </button>
            </ModalButtonsWrapper>
        </Modal>
    </ProductCard>)
}