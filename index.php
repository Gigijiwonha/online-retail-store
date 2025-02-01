<?php
    include_once("./mysql-db-conn.php");    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>GG Market</title>
    <link
    rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
</head>
<body>

    <!-- header section starts -->

    <header class="header">

        <a href="index.php" class="logo"> <i class="fa-solid fa-store"></i> GG Market </a>

        <nav class="navbar">
            <a href="#home" class="top-menu1">home</a>
            <div class="dropdown-menu1">
                    <a href="#aboutus">About us</a> 
                    <a href="#products">Products</a>
                    <a href="#categories">Categories</a>
                    <a href="#contact">contact</a>
            </div>
            <a href="fruit.php" class="top-menu2">Fruit&Veg</a>
            <div class="dropdown-menu2">
                    <a href="fruit.php">Fruits</a> 
                    <a href="vege.php">Vegetables</a>
            </div>
            <a href="beef.php" class="top-menu3">Meat</a>
            <div class="dropdown-menu3">
                    <a href="beef.php">Beef</a> 
                    <a href="pork.php">Pork</a>
                    <a href="ck.php">Chicken</a>
            </div>
            <a href="dairy.php" class="top-menu4">Dairy&Egg</a>
            <div class="dropdown-menu4">
                    <a href="dairy.php">Dairy products</a> 
                    <a href="egg.php">Eggs</a>
            </div>
            <a href="juice.php" class="top-menu5">Drinks</a>
            <div class="dropdown-menu5">
                    <a href="juice.php">Juice</a> 
                    <a href="softdrink.php">Soft drinks</a>
            </div>
        </nav>

        <div class="icons">
            <div class="fa-solid fa-magnifying-glass" id="search-btn"></i></div>
            <div class="fa-solid fa-cart-shopping" id="cart-btn"><span>0</span></div>
            <div class="fa-solid fa-user" id="login-btn"></i></div>

        </div>

        
        <form action="search.php" class="search-form">
            <input type="search"  id="search-box" placeholder="Search Here..." name="search_term">
            <label for="search-box" class="fa-solid fa-magnifying-glass"></label>
        </form>


        <div class="shopping-cart">
            <h3 class="shopping-cart-text">Your<span>Order</span></h3>
            <div class="shopping-cart-in">
            <div class="cart-box">
                <!-- <i class="fa-solid fa-trash"></i>
                <img src="image/fruit-img-3.png" alt="">
                <div class="content">
                    <h3 class="shop-item-title">Plum Black Each</h3>
                    <span class="shop-item-price">$0.47</span>
                    <input class="cart-quantity" type="number" value="1">
                </div> -->
            </div> 
            </div>
            <!-- <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0 </span>
            </div> -->
            <a href="#" class="btn">Checkout</a>
        </div>

        <form action="" class="login-form">
            <h3>login now</h3>
            <input type="email" placeholder="your email" class="box">
            <input type="password" placeholder="your password" class="box">
            <p>Forget your password <a href="#">Click here</a></p>
            <p>Don't have an account <a href="#">Create now</a></p>
            <input type="submit" value="login now" class="btn">
        </form>

    </header>
    
    <!-- header section ends -->

    
    <!-- home section starts -->
    <section class="home" id="home">

        <div class="content">
            <h3>Fresh and <span>organic</span> products for you</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores eligendi iste quae quaerat numquam?</p>
            <a href="#" class="btn">Shop now</a>
        </div>

    </section>

    <!-- home section ends -->
    
    
    <!-- about us section starts -->

    <section class="aboutus" id="aboutus">
        
        <h1 class="heading"> About <span> US </span></h1>
        <div class="row">
            <div class="video-container">
                <video src="image/aboutus-vid.mov" loop autoplay muted></video>
            </div>

            <div class="content">
                <h3>The best grocery market in Sydney</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Vero quam eius minima cupiditate pariatur odit modi corrupti possimus 
                    asperiores. </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur fugit assumenda qui quo molestiae odio officia ea sit corporis harum.
                    </p>
                    <a href="#" class="btn">Lean more</a>
            </div>
        </div>
    </section>
    <!-- about us section ends -->


    <!-- products section starts -->
    <section class="products" id="products">

        <h1 class="heading"> Products <span>On Sale</span> </h1>
        
        <?php
        $sql = "SELECT * FROM products WHERE product_id = '1003' OR product_id = '2004' OR product_id = '3002' OR product_id = '4001' OR product_id = '5000' OR product_id = '6003' OR product_id = '7000'";

        $result = mysqli_query($conn, $sql);
    
        if (mysqli_num_rows($result) > 0) {
        echo "<div class='swiper product-slider'>";
        echo "<div class='swiper-wrapper item-container'  id='product-container'>";
    
        while($row = mysqli_fetch_assoc($result)) {
            echo "<div class='swiper-slide shop-item'>";
            echo "<img class='shop-item-img' src='" . $row["product_image"] . "' alt=''>";
            echo "<div class='fa-solid fa-star'>SALE</div>" ;
            echo "<h3 class='shop-item-title' >" . $row["product_name"] . "</h3>";
            echo "<p class='shop-item-price' > " . $row["unit_price"] . "</p>";
            echo "<p class='shop-item-quantity' >Unit Quantity: " . $row["unit_quantity"] . "</p>";
            echo "<p class='shop-item-stock' >In Stock: " . $row["in_stock"] . "</p>";
            echo "<input class='shop-itme-cartquantity' type='number' value='1'></input>";
            echo "<button class='btn shop-item-button' type='button'>Add to Cart</button>";
            echo "</div>";
        }

        echo "</div>";
        echo "</div>";
    
        }else {
        echo "No products found.";
        }


        mysqli_close($conn);
        ?>
        </section>
    

    <!-- catergories section starts -->
    <section class="categories" id="categories">

        <h1 class="heading"> Product <span>Categories</span> </h1>

        <div class="box-container">

            <div class="box">
                <img src="image/cat-img-1.png" alt="">
                <h3>Fruit & Vege</h3>
                <p>up to 20% off</p>
                <a href="fruit.php" class="btn">Shop now</a>
            </div>
            <div class="box">
                <img src="image/cat-img-4.png" alt="">
                <h3>Fresh Meat</h3>
                <p>up to 30% off</p>
                <a href="beef.php" class="btn">Shop now</a>
            </div>
            <div class="box">
                <img src="image/cat-img-3.png" alt="">
                <h3>Dairy products</h3>
                <p>up to 15% off</p>
                <a href="dairy.php" class="btn">Shop now</a>
            </div>
            <div class="box">
                <img src="image/cat-img-5.png" alt="">
                <h3>Drinks</h3>
                <p>up to 10% off</p>
                <a href="juice.php" class="btn">Shop now</a>
            </div>
        </div>

    </section>

    <!-- catergories section ends -->
    
    <!-- contact us section starts -->
    <section class="contact" id="contact">

        <h1 class="heading"> Contact <span>Us</span> </h1>
       
        <div class="row">
            <form action="">
                <input type="text" placeholder="Name" class="box">
                <input type="email" placeholder="Email" class="box">
                <input type="tel" placeholder="Number" class="box">
                <textarea name="" class="box" placeholder="Messsage" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send message" class="btn">
            </form>
            <div class="image">
                <img src="image/contact-img-1.png" alt="">
            </div>
        </div>
    </section>
    <!-- contact us section ends -->

    <!-- footer section starts -->
    <section class="footer">
        <div class="box-container">

            <div class="box">
                <h3><i class="fa-solid fa-store"></i>  GG Market</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Quo distinctio optio recusandae, 
                    fuga neque quos similique? 
                    </p>
            </div>
            <div class="box">
                <h3>Quick links</h3>
                <a href="#home">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#products">Products</a>
                <a href="#categories">Categories</a>
                <a href="#contact">Contact Us</a>
            </div>
            <div class="box">
                <h3>Location</h3>
                <a href="#">Sydeney NSW</a>
                <a href="#">Melbourne VIC</a>
                <a href="#">Brisbane QLD</a>
            </div>
            <div class="box">
                <h3>Contact Info</h3>
                <a href="#">+123-456-7890</a>
                <a href="#">GGMarket@gamil.com</a>
                <a href="#">Sydney NSW 2000</a>
            </div>
        </div>
        <div class="credit"> Created by <span>GIGI</span> | all rights reserved.</div>
    </section>
    <!-- footer section ends -->

    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <script src="main.js"></script>

</body>
</html>