import Link from "next/link"

export default function Header(){
    return(
        <div className="header">
            <div className="header-button">
                <ul className="header-list">
                    <li><span className="brand-name">Asifa&apos;s Collection</span></li>
                  <Link href={"/"}>  <li>Home</li></Link>
                  <Link href={"/about"}> <li>About</li></Link>
                  <Link href={"/contact"}>  <li>Contact</li></Link>
                </ul>
            </div>
        </div>
    )
}