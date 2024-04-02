
import '../style.css'
import footerbg from '../assets/images/footer-bg.jpg'
import logo from '../assets/images/logo.svg'

const Footer = () => {
    return (
        <footer className="footer section has-bg-image text-center"
            style={{'background-image': `url(${footerbg})`}}>
            <div className="container">

                <div className="footer-top grid-list">

                    <div className="footer-brand has-before has-after">

                        <a href="#" className="logo">
                            <p> INDIAN FLAVOURS</p>
                        </a>

                        <address className="body-4">
                            Restaurant St, Delicious City, London 9578, UK
                        </address>

                        <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@flavours.com</a>

                        <a href="tel:+88123123456" className="body-4 contact-link">Booking Request : +88-123-123456</a>

                        <p className="body-4">
                            Open : 09:00 am - 01:00 pm
                        </p>

                        <div className="wrapper">
                            <div className="separator"></div>
                            <div className="separator"></div>
                            <div className="separator"></div>
                        </div>

                        <p className="title-1">Get News & Offers</p>

                        <p className="label-1">
                            Subscribe us & Get <span className="span">25% Off.</span>
                        </p>

                        <form action="" className="input-wrapper">
                            <div className="icon-wrapper">
                                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                                <input type="email" name="email_address" placeholder="Your email"  className="input-field" />
                            </div>

                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">Subscribe</span>

                                <span className="text text-2" aria-hidden="true">Subscribe</span>
                            </button>
                        </form>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Home</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Menus</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">About Us</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Contact</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
                        </li>

                        <li>
                            <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
                        </li>

                    </ul>

                </div>

                <div className="footer-bottom">

                    <p className="copyright">
                    
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer