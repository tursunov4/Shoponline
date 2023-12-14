import {ProductCard} from "../../styles/Shop.jsx";
import Modal from "../Modal.jsx";
import {ModalButtonsWrapper} from "../../styles/Modal.jsx";
import {useState} from "react";
import OrderServices from "../../../services/OrderServices.jsx";
import {useNavigate} from "react-router-dom"

import "./product.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
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

    return (<div className="product__wrapper" onClick={() => setModalActive(!modalActive)}>

         <img className="porduct__img" src={product.images?.at(0)?.image} alt=""/>
         
        <h2 className="product__title">{product.title}</h2>
        <h4 className="product__price">{product.price}$</h4>
        <p className="product__description">{product.description}</p>
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
        {
          product.images?.map((item , index) =>(
            <SwiperSlide key={index}>
            <img className="modal_img" src={item?.image} alt=""/>
          </SwiperSlide>
          ))
        }
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
        {
          product?.images?.map((item , index)=>(
        <SwiperSlide key={index}>
        <img className="modalslide2__img" src={item?.image} alt=""/>
        </SwiperSlide>
          ))
        }

        
      </Swiper>
                
                {/* <img src={product.photo} alt=""/> */}
                <h2>{product?.title}</h2>
                <h4 className="product__price">{product?.price}</h4>
                <p>{product?.description}</p>
            </ProductCard>
            <ModalButtonsWrapper active={buttonActive}>
                <button onClick={() => handleClick(product.id, 2)} onMouseOver={() => setButtonActive(true)}>
                    Забронировать
                </button>
              
            </ModalButtonsWrapper>
        </Modal>
    </div>)
}