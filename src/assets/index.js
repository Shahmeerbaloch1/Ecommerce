
import women from '../assets/IMG/women.jpeg'
import men from '../assets/IMG/men.jpeg'
import shoes from '../assets/IMG/shoes.jpeg'
import newarrivals from '../assets/IMG/newarrivals.jpeg'
import accessories from '../assets/IMG/accessories.jpeg'
import pbanner from '../assets/IMG/pbanner.jpeg'
import pbanner2 from '../assets/IMG/pbanner2.jpeg'
import p1 from '../assets/IMG/p1.png'
import p2 from '../assets/IMG/p2.png'
import p3 from '../assets/IMG/p3.png'
import p4 from '../assets/IMG/p4.png'
import p5 from '../assets/IMG/p5.jpg'
import p6 from '../assets/IMG/p6.jpg'
import p7 from '../assets/IMG/p7.jpg'
import p8 from '../assets/IMG/p8.png'
import { PiArrowClockwise, PiCar, PiClockBold, PiLockKeyLight } from "react-icons/pi";



let assets = [
 pbanner,
 pbanner2
]
let products1 = [
    {
        id : 1,
        catagories : "Men" ,
        subcate : "T-shirts" ,
        Img : p1,
        title : "Floral Short-Sleeve Silk Chiffon Dress",
        price : 300
    },
    {
        id : 2,
        catagories : "Kids" ,
        subcate : "T-shirts" ,
        Img : p2,
        title : "Floral Short-Sleeve Silk Chiffon Dress",
        price : 122
    },
    {
        id : 3,
        catagories : "Kids" ,
        subcate : "T-shirts" ,
        Img : p3,
        title : "Floral Short-Sleeve Silk Chiffon Dress",
        price : 120
    },
    {
        id : 4,
        catagories : "Men" ,
        subcate : "T-shirts" ,
        Img : p4,
        title : "Floral Short-Sleeve Silk Chiffon Dress",
        price : 110
    },
    {
        id : 5,
        catagories : "Women" ,
        subcate : "T-shirts" ,
        Img : p5,
        title : "Floral Short-Sleeve Silk Chiffon Dress",
        price : 20
       },
       {
        id : 6,
        catagories : "Women" ,
        subcate : "T-shirts" ,
           Img : p6,
           title : "Floral Short-Sleeve Silk Chiffon Dress",
           price : 105
       },
       {
        id : 7,
        catagories : "Women" ,
        subcate : "T-shirts" ,
           Img : p7,
           title : "Floral Short-Sleeve Silk Chiffon Dress",
           price : 250
       },
       {
        id : 8,
        catagories : "Kids" ,
        subcate : "T-shirts" ,
           Img : p8,
           title : "Floral Short-Sleeve Silk Chiffon Dress",
           price : 185
       },
    {
        id : 9,
        catagories : "Men" ,
        subcate : "T-shirts" ,
        Img : p5,
        title : "blue shirt ",
        price : 65
       },
       {
        id : 10,
        catagories : "Kids" ,
        subcate : "T-shirts" ,
           Img : p6,
           title : "yellow & white best half frok",
           price : 98
       },
       {
        id : 11,
        catagories : "Men" ,
        subcate : "T-shirts" ,
           Img : p7,
           title : "white dress for women",
           price : 78
       },
       {
        id : 12,
        catagories : "Women" ,
        subcate : "T-shirts" ,
           Img : p8,
           title : "black men shirt",
           price : 155
       } 
]


let catagories = [
    {
        Img : women,
        title : "Women"
    },
    {
        Img : men,
        title : "Men"
    },
    {
        Img : accessories,
        title : "Accessories"
    },
    {
        Img : shoes,
        title : "Shoes"
    },
    {
        Img : newarrivals,
        title : "New Arrivals"
    }
    

]

let Title = [
    
{title : "home",
    path : "/"

},
        { title : "shop",
            path :"/shop"

        },
        {title : "pages",
            path : "/pages"
        },
        {title : "elements",
            path : "elements"
        },
        {title : "product",
            path : "/products"
        }, 
        {title : "cart",
            path : "/cart"
        },
        {title : "buynow",
            path : "/buynow"
        },
        {title : "accessories",
            path : "accessories"
        }, 
        {title : "pages",
            path : "/pages"
    }
]

let icons = [
    {
        icon : PiCar,
        h1 : "FREE SHIPPING",
        p : "Free shipping on all US order or order above $200"
    }, {
        icon : PiClockBold  ,
        h1 : "SUPPORT 24/7",
        p : "Contact us 24 hours a day, 7 days a week"
    }, {
        icon : PiArrowClockwise  ,
        h1 : "30 DAYS RETURN",
        p : "Simply return it within 30 days for an exchange."
    }, {
        icon : PiLockKeyLight ,
        h1 : "100% PAYMENT SECURE",
        p : "We ensure secure payment with PEV"
    }
]

export  { Title ,catagories , assets ,products1 ,icons}

