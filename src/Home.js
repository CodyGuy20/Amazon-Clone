
import React from "react";
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                    button="/" to="/l"
                />




                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Fitbit Charge 4 Fitness Activity Tracker (Graphite and Black)"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="67415592"
                        title="Tommy Hilfiger Men's Printed Regular fit T-Shirt (Classic White)"
                        price={34.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/710d1GhvLtL._UX569_.jpg"
                    />
                    <Product
                        id="49336212"
                        title="Marks and Spencer Rayon a-line Dress for Women"
                        price={25.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/917ZILtcGVL._UX569_.jpg"
                    />
                    <Product
                        id="12736830"
                        title="Being Fab Junior Stylish Kids Blue Cotton Boys Shirt"
                        price={15.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71W7P1NNolL._UY741_.jpg"
                    />
                    <Product
                        id="01634668"
                        title="4 YOU Girl's Empire Maxi Dress for Girls"
                        price={18.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71g1SYG8FtL._UY741_.jpg"
                    />
                </div>

                <div className="home__row">


                    <Product
                        id="14259824"
                        title="Kotion Each Over the Ear Headsets with Mic and LED - G2100 Edition (Black/Blue"
                        price={50.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/611WgF9-EIL._SL1200_.jpg"
                    />
                    <Product
                        id="47256781"
                        title="Nintendo Switch with neon red and neon blue Joy‑Con - Version 2 - HAC-001(-01)"
                        price={250.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/41V5KQ500IL.jpg"
                    />

                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />

                </div>
            </div>



        </div >

    );
}

export default Home;