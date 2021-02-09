import logo from './logo.svg';
import './App.css';

function App() {
    // creating menu function for sandwich menu
    const openMenu = () =>{
        document.querySelector(".sidebar").classList.add("open");
    }

    const closeMenu = () =>{
        document.querySelector(".sidebar").classList.remove("open");
    }

  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                     {/* <!-- Sandwich menu starts here --> */}
                     <button onClick={openMenu}>
                         {/* <!-- here goes the magic --> */}
                         &#9776;
                     </button>
                <a href="index.html">myShopping-Gh</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign-in</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li><a href="#">Shirts</a></li>
                <li><a href="#">Chinos</a></li>
                <li><a href="#">Jeans</a></li>
                <li><a href="#">Under Garments</a></li>
                {/* <!-- <li>Shirts</li> --> */}
            </ul>
        </aside>
        <main className="main">
            <div className="content">
            <ul className="products">
                {/* <!-- Item 1 --> */}
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/l1.jpg" alt="White shirt"/>
                        <div className="product-name"> 
                            <a href="product.html" alt="Product name">Slim white shirt</a>
                        </div>
                        <div className="product-brand">Rauch</div>
                        <div className="product-price">GH₵60</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>

                {/* <!-- Item 2 --> */}
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/l1.jpg" alt="White shirt"/>
                        <div className="product-name">
                            <a href="product.html" alt="Product name">Slim white shirt</a>
                        </div>
                        <div className="product-brand">Rauch</div>
                        <div className="product-price">GH₵60</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>

                {/* <!-- Item 3 --> */}
                 <li>
                    <div className="product">
                        <img className="product-image" src="/images/l1.jpg" alt="White shirt"/>
                        <div className="product-name">
                            <a href="product.html" alt="Product name">Slim white shirt</a>
                        </div>
                        <div className="product-brand">Rauch</div>
                        <div className="product-price">GH₵60</div>
                        <div className="product-rating">4.5 Stars (10 Reviews)</div>
                    </div>
                </li>

                {/* <!-- Item 4 --> */}
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/l1.jpg" alt="White shirt"/>
                        <div className="product-name">
                            <a href="product.html" alt="Product name">Slim white shirt</a>
                        </div>
                        <div className="product-brand">Rauch</div>
                        <div className="product-price">GH₵60</div>
                        <div className="product-rating">4.5 Stars - 10 Reviews</div>
                    </div>
                </li>

                {/* <!-- item 5 --> */}
                <li>
                    <div className="product">
                        <img className="product-image" src="/images/l1.jpg" alt="White shirt"/>
                        <div className="product-name">
                            <a href="product.html" alt="Product name">Slim white shirt</a>
                        </div>
                        <div className="product-brand">Rauch</div>
                        <div className="product-price">GH₵60</div>
                        <div className="product-rating">4.5 Stars - 10 Reviews</div>
                    </div>
                </li>
            </ul>
        </div>
        </main>
        <footer className="footer">
            All rights reserved. <a className="inc" href="#">Rauch Inc.</a> 2021
        </footer>
    </div>
  );
}

export default App;
