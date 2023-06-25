import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <section className="header">
            <a href="#"><Image src="/logo.png" width={100} height={35} className="logo" alt=""/></a>

            <div>
                <ul id="navbar">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li id="lg-bag"><a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a></li>
                    <a href="#" id="close"><i class="fa-solid fa-xmark"></i></a>
                </ul>
            </div>

            <div id="mobile">
                <a href="cart.html"><i class="fa-solid fa-bag-shopping"></i></a>
                <i id="bar" class="fas fa-outdent"></i>
            </div>
        </section>

        

    </div>
  )
}

export default Navbar