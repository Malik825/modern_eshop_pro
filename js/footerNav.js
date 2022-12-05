function createFooter() {
  document.querySelector("footer").innerHTML = `   <div class="container">
    <div class="row jbtn align">
        <div class="brand">
            <div class="department" id="menuHandler">
                <i class="fa fa-bars"></i>
                <h3>All Departments</h3>
                <div class="sub_item1">
                    <a href="#"><i class="fa fa-angle-down"></i>
                        <div class="sub_menu">
                            <ul>
                                <li>Men Shirts</li>
                                <li>Kid Shirts</li>
                                <li>Women Shirts</li>
                                <li>Men Shoes</li>
                                <li>Women Shoes</li>
                                <li>Kid Shoes</li>
                              
                                <li>Headphones</li>
                                <li>Laptops</li>
                                <li>Airpods</li>
                               
                           
                                <li>Audio/music</li>
                                <li>Televisions</li>
                                <li>Watches</li>
                            </ul>
                        </div>

                    </a>
                </div>
            
            </div>
        </div>
        
         
        <div class="navigation">
               <div class="closeNav">Ismart <i class="fa fa-times"></i></div>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="about.html">About us</a>
                </li>
                
                
                <li><a href="#">Products</a></li>
                <li>
                    <a href="#">Reviews</a>
                </li>
                
                <li>
                    <a href="#">Blog</a>
                </li>
                
                <li>
                    <a href="#">Contact us</a>
                </li>
                
            </ul>
   <div class="cartNum" id="smIcon"><i class="fa fa-shopping-bag" id="cart-icon"></i><span class="cartCounter" style="color: #fff"></span></div>

   <div class="navIcons" id="smNavIcons">
                <a href="#"><i class="fa fa-shopping-basket"></i> <p>Shop</p></a><a href="#"><i class="far fa-star"></i> <p>Ratings</p></a><a href="#"><i class="far fa-user"></i> <p>Account</p></a>

            </div>
        </div>
   <div class="cartNum" id="lgIcon"><i class="fa fa-shopping-bag" id="cart-icon"></i><span class="cartCounter" style="color: #fff"></span></div>
   <div class="hamburger">
                <i class="fa fa-bars"></i>
            </div>    
</div>
<div class="navIcons" id="lgNavIcons">
                <a href="#"><i class="fa fa-shopping-basket"></i> <p>Shop</p></a><a href="#"><i class="far fa-star"></i> <p>Ratings</p></a><a href="#"><i class="far fa-user"></i> <p>Account</p></a>

            </div>
         
</div>
}
createFooter();
