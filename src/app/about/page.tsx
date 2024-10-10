import Image from "next/image";
import logo from "@/components/logo.jpeg"
export default function About(){
    return(
        <div className="about-body">
             <div className="about">
                <div>
                <h1>About Us</h1><br/>
               <h3> Welcome to <span className="asifa-collection"> Asifa&apos;s Collection</span>!</h3> <br/>
               <p>At Asifa&apos;s Collection, we believe that shopping should be an enjoyable and inspiring experience. Our mission 
is to provide you with a curated selection 
of high-quality products that cater to your lifestyle, all in one convenient place.</p><br/>

<ul className="about-list">
    <li>We aim to deliver exceptional products and experiences to our customers.</li>
    <li>Founded with passion, we have grown and evolved to meet your needs.</li>
    <li>Integrity, innovation, and customer focus are at our heart.</li>
    <li> We are  excited about new innovations and expanding our product offerings.</li>
</ul>
</div>
            <div className="logo">
                    <Image src={logo} height={1200} width={900} alt="logo"/>
                 </div>



                
            </div>
        </div>
    )
}