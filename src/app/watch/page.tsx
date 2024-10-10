import Image from "next/image"
import watch1 from "@/components/watch1.jpeg"
import watch2 from "@/components/watch2.jpeg"
import watch3 from "@/components/watch3.jpeg"
import watch4 from "@/components/watch4.jpeg"
import watch5 from "@/components/watch5.jpeg"
import watch6 from "@/components/watch6.jpeg"
import watch7 from "@/components/watch7.jpeg"
import watch8 from "@/components/watch8.jpeg"


export default function Watch(){
    return(
        <div className="Main_Container">

            {/* 1st watch */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch1} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 1100/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd watch */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch2} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 950/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd watch */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch3} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 1050/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th watch */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch4} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 799/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th watch */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch5} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 3299/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th watch */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch6} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 1350/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


                 {/* 7th watch */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch7} height={200} width={200} alt="Watch"/>
                    <h4>Price:Rs 999/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



                 {/* 8th watch */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={watch8} height={300} width={300} alt="Watch"/>
                    <h4>Price:Rs 13999/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

        </div>
    )
}