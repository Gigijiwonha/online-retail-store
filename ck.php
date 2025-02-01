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
    <header class="header">

    <a href="index.php" class="logo"> <i class="fa-solid fa-store"></i> GG Market </a>

    <nav class="navbar">
    <a href="index.php" class="top-menu1">home</a>
        <div class="dropdown-menu1">
            <a href="index.php#aboutus">About us</a> 
            <a href="index.php#products">Products</a>
            <a href="index.php#categories">Categories</a>
            <a href="index.php#contact">contact</a>
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
            <div class="fa-solid fa-cart-shopping" id="cart-btn"></i><span>0</span></div>
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
            <!-- <div class="cart-box">
                <i class="fa-solid fa-trash"></i>
                <img src="image/fruit-img-3.png" alt="">
                <div class="content">
                    <h3 class="shop-item-title">Plum Black Each</h3>
                    <span class="shop-item-price">$0.47</span>
                    <input class="cart-quantity" type="number" value="1">
                </div>
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


    <?php
    $sql = "SELECT * FROM products WHERE sub_category = 'chicken'";

    $result = mysqli_query($conn, $sql);
    
    if (mysqli_num_rows($result) > 0) {

    echo "<section class='fruit-products' id=''fruit-products'>";
    echo "<h1 class='heading'><span>Chicken</span>  Products </h1>";
    echo "<div class='fruit-box-container'>";

    while($row = mysqli_fetch_assoc($result)) {
        echo "<div class='shop-item'>";
        echo "<img class='shop-item-img' src='" . $row["product_image"] . "' alt=''>";
        echo "<h3 class='shop-item-title' >" . $row["product_name"] . "</h3>";
        echo "<p class='shop-item-price' >" . $row["unit_price"] . "</p>";
        echo "<p class='shop-itemm-quantity' >Unit Quantity: " . $row["unit_quantity"] . "</p>";
        echo "<p class='shop-item-stock' >In Stock: " . $row["in_stock"] . "</p>";
        echo "<input class='shop-itme-cartquantity' type='number' value='1'></input>";
        echo "<button class='btn shop-item-button' type='button'>Add to Cart</button>";
        echo "</div>";
    }
    echo "</div>";
    echo "</section>";
    
    } else {
    echo "No products found.";
    }
    

    mysqli_close($conn);
	?>

    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

    <script src="main.js"></script>
</body>
</html>