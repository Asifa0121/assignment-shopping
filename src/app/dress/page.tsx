import Image from "next/image"
import dress1 from "@/components/dress1.jpeg"
import dress2 from "@/components/dress2.jpeg"
import dress3 from "@/components/dress3.jpeg"
import dress4 from "@/components/dress4.jpeg"
import dress5 from "@/components/dress5.jpeg"
import dress6 from "@/components/dress6.jpeg"


export default function Dress(){
    return(
        <div className="Main_Container">

            {/* 1st dress */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress1} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 8200/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd dress */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress2} height={300} width={300} alt="bag"/>
                    <h4>Price:Rs 1599/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd dress */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress3} height={400} width={400} alt="bag"/>
                    <h4>Price:Rs 2950/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th dress */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress4} height={250} width={300} alt="bag"/>
                    <h4>Price:Rs 2099/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th dress */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress5} height={400} width={400} alt="bag"/>
                    <h4>Price:Rs 3300/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th Bag */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={dress6} height={400} width={400} alt="bag"/>
                    <h4>Price:Rs 2850/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

        </div>
    )
}