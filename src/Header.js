import React from "react";
import "./Header.css";


const Header=()=>{
    return(

<>


<header>

<img src="image/logo.png"  alt="logo"/>
<div className="searchbar">
<input type="serch" placeholder='Search Here'/>
<i class="fa-solid fa-magnifying-glass"></i>
</div>
</header>


</>



    );
};

export default Header;