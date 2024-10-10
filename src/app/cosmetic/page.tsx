import Image from "next/image"
import  makeup1 from "@/components/makeup1.jpeg"
import makeup2 from "@/components/makeup2.jpeg"
import makeup3 from "@/components/makeup3.jpeg"
import makeup4 from "@/components/makeup4.jpeg"
import makeup5 from "@/components/makeup5.jpeg"
import makeup6 from "@/components/makeup6.jpeg"
import makeup7 from "@/components/makeup7.jpeg"
import makeup8 from "@/components/makeup8.jpeg"


export default function Makeup(){
    return(
        <div className="Main_Container">

            {/* 1st makeup */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup1} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:@each Rs 800/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd makeup */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup2} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:Rs 2550/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd makeup */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup3} height={250} width={250} alt="Make-up Items"/>
                    <h4>Price:Rs 1300/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th makeup */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup4} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:Rs 999/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th makeup */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup5} height={250} width={250} alt="Make-up Items"/>
                    <h4>Price:Rs 670/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th makeup */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup6} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:Rs 720/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


                 {/* 7th makeup */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup7} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:Rs 1100/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



                 {/* 8th makeup */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={makeup8} height={200} width={200} alt="Make-up Items"/>
                    <h4>Price:Rs 899/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div> 
             </div>

        </div>
    )
}