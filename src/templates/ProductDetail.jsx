import React from 'react';
import logo from '../assets/logoname.jpeg';
import img5 from '../assets/8.jpeg';
import img6 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';

const ProductView = () => {

    return (


        <div className="av-app">
            {/* Navbar */}
            <nav className="av-nav">
                <div className="av-logo text-center"><img src={logo} alt="ashvuples" height="30" width="170" /></div>
            </nav>
            <div className="product-view">

                <div className="product-view-left">
                    <img src={img5} height="100%" width="100%"/>
                    <img src={img6} height="100%" width="100%"/>
                    <img src={img10} height="100%" width="100%"/>
                    <img src={img11} height="100%" width="100%"/>
                </div>

                <div className="product-view-right">
                    <div className='product-view-right-details'>
                        <div>
                        <div class="name">Premium Linen Shirts</div>
                        <p className="price">
                            <span className="original">1600.00 INR</span>
                        </p>
                        <div>
                            <button className='btn btn-dark'>Enquiry</button>
                        </div>
                        
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
