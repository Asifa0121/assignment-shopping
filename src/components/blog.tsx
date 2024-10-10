import Image from "next/image";
import bag from "@/components/bag.jpeg"
import dress from "@/components/dress.jpeg"
import shoes from "@/components/shoes.jpeg"
import watch from "@/components/watch.jpeg"
import jewllery from "@/components/jewellery.jpeg"
import cosmetic from "@/components/cosmetic.jpeg"
import Link from "next/link";
export default function BlogCard(){
  return(
    <div className="body">
      {/* Bags Section */}
      <div className="sub-body">
        <div className="image">
          <Image src={bag} height={300} width={300} alt="Bag" />
        </div>
        <div className="description">
          <h1>Bags Collection</h1>
          <p>Discover the essential guide to choosing the perfect bag for every occasion! 
          Our collection of classic bags offers elegance and versatility. Shop your favorites today!
          </p>
           <Link href={"/bag"}>  <button className="explore">Explore</button></Link>
        </div>        
      </div>

      {/* Dresses */}

      <div className="sub-body">
        <div className="image">
          <Image src={dress} height={500} width={500} alt="Bag" />
        </div>
        <div className="description">
          <h1> Outfits for Every Event</h1>
          <p> Discover stylish outfit ideas for various occasions, from casual brunches to formal events.
          Get inspired and dress to impress!
          </p>
          <Link href={"/dress"}>  <button className="explore">Explore</button></Link>
        </div>
      </div>

  {/* Shoes  */}
  <div className="sub-body">
        <div className="image">
          <Image src={shoes} height={500} width={500} alt="Bag" />
        </div>
        <div className="description">
          <h1>Shoes Collection</h1>
          <p>Step into style with our exquisite range of shoes!  our collection has something for every woman.<br/> 
          Explore the best shoe styles to pair with various dress types, from casual to formal.
          </p>
          <Link href={"/shoes"}>  <button className="explore">Explore</button></Link>
        </div>        
      </div>



  {/* Watch  */}
  <div className="sub-body">
        <div className="image">
          <Image src={watch} height={500} width={500} alt="Bag" />
        </div>
        <div className="description">
          <h1>Watch Collection</h1>
          <p>Time to shine with our stunning collection.
            Our selection offers the perfect accessory for any outfit.
            Discover the perfect blend of sophistication and practicality explore our collection today!
          </p>
          <Link href={"/watch"}>  <button className="explore">Explore</button></Link>
        </div>        
      </div>


        {/* Jewellery  */}
  <div className="sub-body">
        <div className="image">
          <Image src={jewllery} height={900} width={900} alt="Bag" />
        </div>
        <div className="description">
          <h1>Jewllery Collection</h1>
          <p>Whether you are looking for everyday essentials or statement pieces for special occasions, 
            our jewelry is designed to celebrate your unique style. Discover the perfect finishing touch for your look today!
          </p>
          <Link href={"/jewellery"}>  <button className="explore">Explore</button></Link>
        </div>        
      </div>

              {/* Cosmetic  */}
  <div className="sub-body">
        <div className="image">
          <Image src={cosmetic} height={400} width={400} alt="Bag" />
        </div>
        <div className="description">
          <h1>Unlock Your Beauty</h1>
          <p> Discover the top cosmetic products every woman needs in her makeup bag! 
          Explore our curated selection and find your perfect beauty match today!
          We have everything you need to shine!
          </p>
          <Link href={"/cosmetic"}>  <button className="explore">Explore</button></Link>
        </div>        
      </div>



    </div>
  )
}