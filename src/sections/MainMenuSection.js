import React from 'react'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav class="mainmenu container">
            <div class="logotype">
                Fixxo.
             </div>
            <div class="menu-links">
                <a href="index.html">Home</a>
                <a href="#">Categories</a>
                <a href="#">Products</a>
                <a href="contact.html">Contacts</a>
            </div>
            <div class="menu-icons">
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glas" />
                <MenuIcon link="/compare" icon="fa-regular fa-repeat" />
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
                <MenuIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
               
                <a class="menu-icon" href="#">
                    <i class="fa-regular fa-magnifying-glass"></i>
                </a>
                <a href="#"><i class="fa-regular fa-repeat"></i>
                </a>
                <a href="#">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span>
                    <i class="fa-regular fa-heart"></i>
                </a>
                <a href="#">
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span>
                    <i class="fa-regular fa-bag-shopping"></i>
            </a>
        </div>
    </div>
</nav>
  )
}

export default MainMenuSection