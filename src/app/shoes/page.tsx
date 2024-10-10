import Image from "next/image"
import shoes1 from "@/components/shoes1.jpeg"
import shoes2 from "@/components/shoes2.jpeg"
import shoes3 from "@/components/shoes3.jpeg"
import shoes4 from "@/components/shoes4.jpeg"
import shoes5 from "@/components/shoes5.jpeg"
import shoes6 from "@/components/shoes6.jpeg"
import shoes7 from "@/components/shoes7.jpeg"
import shoes8 from "@/components/shoes8.jpeg"


export default function Shoes(){
    return(
        <div className="Main_Container">

            {/* 1st shoes */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes1} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 7150/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes2} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 2299/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes3} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 4000/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes4} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 3999/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes5} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 5250/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes6} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 6199/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            
             {/* 7th shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes7} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 3100/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



            
             {/* 8th shoes */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={shoes8} height={200} width={200} alt="bag"/>
                    <h4>Price:Rs 4399/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

        </div>
    )
}