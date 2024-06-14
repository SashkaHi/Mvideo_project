import React from 'react';
import "./Header.css"
import {GrLocation} from "react-icons/gr";
import {LuPhone} from "react-icons/lu";
import mvideo from "../../image/mvideo.svg"
import {TbListSearch} from "react-icons/tb";
import {IoIosSearch} from "react-icons/io";
import {WiTime9} from "react-icons/wi";
import {GoPerson} from "react-icons/go";
import {FaRegHeart} from "react-icons/fa";
import {SlBasket} from "react-icons/sl";
import {GiHistogram} from "react-icons/gi";
import {Link} from "react-router-dom"
const Header = () => {  


    const divStyle = {
        backgroundColor: "white",
    }
    const picStyle = {
        backgroundColor: "#333333",
    }
    return (
        <div className="all_header">
            <div className="high_header">
                <div className="header_buttons">
                    <button><GrLocation/>Санкт-Петербург</button>
                    <button>Магазины</button>
                    <button>Доставка</button>
                </div>
                <div className="second_half_button">
                    <button>Блог «М.Клик»</button>
                    <button>M.Club</button>
                    <button>Для бизнеса</button>
                    <button><LuPhone/> 8-800-600-7775</button>
                </div>
            </div>
            <div className="main_header" style={divStyle}>
                <div className="pic">
                    <Link to="/"> <img style={divStyle} src={mvideo} alt=""/> </Link>
                    <button className="btn_catalog">
                        <TbListSearch style={{backgroundColor: "#E21235"}}/>
                        Каталог
                    </button>
                    <input className="input_header"
                           type="text"
                           placeholder="Искать скидки до 50%"/>
                    <button className="btn_input" disabled={undefined}><IoIosSearch
                        style={{backgroundColor: "#E21235"}}/></button>
                    <button className="btn_status"><WiTime9 style={{backgroundColor: "white"}}/><br/>Статус заказа
                    </button>
                    <button className="btn_entrance"><GoPerson style={{backgroundColor: "white"}}/><br/>Войти</button>
                    <button className="btn_comparison"><GiHistogram style={{backgroundColor: "white"}}/><br/>Сравнение
                    </button>
                    <button className="btn_favorites"><FaRegHeart style={{backgroundColor: "white"}}/><br/>Избранное</button>
                    <Link to="/cart"><button className="btn_basket"><SlBasket style={{backgroundColor: "white"}}/><br/>Корзина</button></Link>

                </div>

            </div>
        </div>
    );
};

export default Header;