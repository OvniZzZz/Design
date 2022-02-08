import React from "react";
function Tariffs(){
    return(
        <div className="tariffs">
                <div className="tariff">
                    <ul>
                        <li className="tariff_name">Basic</li>
                        <li>10 лайков</li>
                        <li>10репостов</li>
                        <li>10 че то там</li>
                        <li>тут было что то написано</li>
                        <li>
                            <p className="price">10 рубликов</p>
                            <p className="period">В день</p>
                        </li>
                        <li>
                            <a href="#" className="but_tariff">Sign Up</a>
                        </li>
                    </ul>
                </div>
                <div className="tariff">
                    <ul>
                        <li className="tariff_name_2">Pro</li>
                        <li>10 лайков</li>
                        <li>10репостов</li>
                        <li>10 че то там</li>
                        <li>тут было что то написано</li>
                        <li>
                            <p className="price">50 рубликов</p>
                            <p className="period">В день</p>
                        </li>
                        <li>
                            <a href="#" className="but_tariff_2">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Tariffs;