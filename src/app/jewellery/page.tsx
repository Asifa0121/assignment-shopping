import Image from "next/image"
import jewellery1 from "@/components/jewellery1.jpeg"
import jewellery2 from "@/components/jewellery2.jpeg"
import jewellery3 from "@/components/jewellery3.jpeg"
import jewellery4 from "@/components/jewellery4.jpeg"
import jewellery5 from "@/components/jewellery5.jpeg"
import jewellery6 from "@/components/jewellery6.jpeg"
import jewellery7 from "@/components/jewellery7.jpeg"
import jewellery8 from "@/components/jewellery8.jpeg"


export default function Watch(){
    return(
        <div className="Main_Container">

            {/* 1st jewellery */}
            <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery1} height={200} width={200} alt="Jewellery"/>
                    <h4>Price:Rs 4550/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



             {/* 2nd jewellery */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery2} height={200} width={200} alt="Jewellery"/>
                    <h4>Price:Rs 2500/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>




             {/* 3rd jewellery */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery3} height={300} width={300} alt="Jewellery"/>
                    <h4>Price:Rs 2150/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 4th jewellery */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery4} height={200} width={200} alt="Jewellery"/>
                    <h4>Price:Rs 1799/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>

            

             {/* 5th jewellery */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery5} height={300} width={300} alt="Jewellery"/>
                    <h4>Price:Rs 900/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


            

             {/* 6th jewellery */}
             <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery6} height={200} width={200} alt="Jewellery"/>
                    <h4>Price:Rs 1299/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>


                 {/* 7th jewellery */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery7} height={200} width={200} alt="Jewellery"/>
                    <h4>Price:Rs 599/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div>
            </div>



                 {/* 8th jewellery */}
                 <div className="sub-container">
                <div className="items">
                <div className="item-image">
                    <Image src={jewellery8} height={300} width={300} alt="Jewellery"/>
                    <h4>Price:Rs 700/-</h4>
                </div>              
                <button className="buy">Buy Now</button>
            </div> 
             </div>

        </div>
    )
}