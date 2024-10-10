import Link from "next/link";

export default function Contact(){
    return(
        <div>
            <div className="contact">
                <h3>Contact us</h3>
                <p>We had love to hear from you! Whether you have a question, feedback, or need assistance, our team is
                     here to help.</p>
                     <h2>Customer Service Hours:</h2>
                     <ul>
                        
                        <li> Monday to Friday: 9 AM - 6 PM</li>
                        <li>Saturday: 10 AM - 4 PM</li>
                        <li>Sunday: Closed</li>
                     </ul>
                     <h2>Email Us:</h2>
                     <p>For any inquiries, please reach out to us at support<Link href={"irhafatima0106@gmail.com"}> irhafatima0106@gmail.com</Link>. We aim to respond within 24 hours.</p>
                     <h2>Call Us:</h2>
                     <p>You can reach our customer service team at:
                     📞 (123) 456-7890</p>
                     <h2>Follow Us on Social Media:</h2>
                     <span className="stayupdate">Stay updated with our latest products and promotions:</span>
                        <ul>                     
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Pinterest</li>                                         
                        </ul>
                       
            
            </div>
        </div>
    )
}