import React from 'react';
import Product from './Product';
import './Home.css';


function Home() {
    return (
      <div className="home">
        {/* Alternate Image: <img src="https://tinyurl.com/y9ncyvm6" alt=""></img> */}
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The C Programming Language"
            price={32.42}
            rating={4}
            image="https://rb.gy/a87fpc"
          />
          <Product
            id="12322111"
            title="Jura Capresso S8 Automatic Coffee Machine"
            price={99.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71b3pTgBWHL._AC_SL1500_.jpg"
          />
        </div>
        {/* 2nd row */}
        <div className="home__row">
          <Product
            id="123455341"
            title="Apple iPad Mini 16GB"
            price={165.77}
            rating={3}
            image="https://tinyurl.com/yd94vte4"
          />
          <Product
            id="12239341"
            title="KitchenAid Mixer Artisan Design Series with Glass Bowl - Candy Apple Red"
            price={239.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81QkLzXfKHL._AC_SL1500_.jpg"
          />
          <Product
            id="1234999341"
            title="Alexa Echo (2nd Generation)"
            price={49.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61yI7vWa83L._AC_SL1000_.jpg"
          />
        </div>
        {/* 3rd row */}
        <div className="home__row">
          <Product
            id="12499341"
            title="Xbox Series X"
            price={499.99}
            rating={4}
            image="https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2020/09/xbox-series-x-box-art.jpg"
          />
        </div>

        {/* Product */}
      </div>
    );
}

export default Home
