import Image from "next/image"
import bag1 from "@/components/bag1.jpeg"
import bag2 from "@/components/bag2.jpeg"
import bag3 from "@/components/bag3.jpeg"
import bag4 from "@/components/bag4.jpeg"
import bag5 from "@/components/bag5.jpeg"
import bag6 from "@/components/bag6.jpeg"


export default function Bag(){
    return(
        <div className="Main_Container">

            {/* 1st Bag */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag1} height={400} width={400} alt="bag"/>
                    <h4>Price:Rs 5150/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag2} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 2500/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag3} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 3000/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag4} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 4299/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag5} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 4299/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={bag6} height={500} width={500} alt="bag"/>
                    <h4>Price:Rs 3200/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

        </div>
    )
}