import '../style.css'
import { useState, useEffect } from 'react'
import Services from './Services';
import About from './About';
import Label from './Label';
import { Menu } from './Menu';
import { Testimonial } from './Testimonial';
import Reservation from './Reservation';
import Features from './Features';
import { Events } from './Events';
import heroslider2 from '../assets/images/hero-slider-2.jpg'

import heroslider3 from '../assets/images/hero-slider-3.jpg'
import heroicon from '../assets/images/hero-icon.png'


export const Hero = () => {
    const [currentSlidePos, setCurrentSlidePos] = useState(0);

    useEffect(() => {
        const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
        const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
        const heroSliderNextBtn = document.querySelector("[data-next-btn]");

        const updateSliderPos = () => {
            heroSliderItems.forEach((item, index) => {
                if (index === currentSlidePos) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        };

        const slideNext = () => {
            setCurrentSlidePos(prevPos => (prevPos === heroSliderItems.length - 1 ? 0 : prevPos + 1));
        };

        const slidePrev = () => {
            setCurrentSlidePos(prevPos => (prevPos === 0 ? heroSliderItems.length - 1 : prevPos - 1));
        };

        const autoSlideInterval = setInterval(slideNext, 7000);

        const handleMouseOver = () => {
            clearInterval(autoSlideInterval);
        };

        const handleMouseOut = () => {
            setInterval(slideNext, 7000);
        };

        heroSliderNextBtn.addEventListener("click", slideNext);
        heroSliderPrevBtn.addEventListener("click", slidePrev);
        heroSliderNextBtn.addEventListener("mouseover", handleMouseOver);
        heroSliderPrevBtn.addEventListener("mouseover", handleMouseOver);
        heroSliderNextBtn.addEventListener("mouseout", handleMouseOut);
        heroSliderPrevBtn.addEventListener("mouseout", handleMouseOut);

        updateSliderPos();

        return () => {
            clearInterval(autoSlideInterval);
            heroSliderNextBtn.removeEventListener("click", slideNext);
            heroSliderPrevBtn.removeEventListener("click", slidePrev);
            heroSliderNextBtn.removeEventListener("mouseover", handleMouseOver);
            heroSliderPrevBtn.removeEventListener("mouseover", handleMouseOver);
            heroSliderNextBtn.removeEventListener("mouseout", handleMouseOut);
            heroSliderPrevBtn.removeEventListener("mouseout", handleMouseOut);
        };
    }, [currentSlidePos]);


    return (
        <main>
            <article>
                <section className="hero text-center" aria-label="home" id="home">
                    <ul className="hero-slider" data-hero-slider>
                        <li className="slider-item active" data-hero-slider-item>
                            <div className="slider-bg">
                                <img src="" width="1880" height="950" alt="" className="img-cover"></img>
                            </div>
                            <p className="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>
                            <h1 className="display-1 hero-title slider-reveal">
                                For the love of <br />
                                delicious food
                            </h1>
                            <p className="body-2 hero-text slider-reveal">
                                Come with family & feel the joy of mouthwatering food
                            </p>
                            <a href="#" className="btn btn-primary slider-reveal">
                                <span className="text text-1">View Our Menu</span>
                                <span className="text text-2" aria-hidden="true">View Our Menu</span>
                            </a>
                        </li>
                        <li className="slider-item" data-hero-slider-item>
                            <div className="slider-bg">
                                <img src={heroslider2} width="1880" height="950" alt="" className="img-cover" />
                            </div>
                            <p className="label-2 section-subtitle slider-reveal">delightful experience</p>
                            <h1 className="display-1 hero-title slider-reveal">
                                Flavors Inspired by <br />
                                the Seasons
                            </h1>
                            <p className="body-2 hero-text slider-reveal">
                                Come with family & feel the joy of mouthwatering food
                            </p>
                            <a href="#" className="btn btn-primary slider-reveal">
                                <span className="text text-1">View Our Menu</span>
                                <span className="text text-2" aria-hidden="true">View Our Menu</span>
                            </a>
                        </li>
                        <li className="slider-item" data-hero-slider-item>
                            <div className="slider-bg">
                                <img src={heroslider3} width="1880" height="950" alt="" className="img-cover" />
                            </div>
                            <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>
                            <h1 className="display-1 hero-title slider-reveal">
                                Where every flavor <br />
                                tells a story
                            </h1>
                            <p className="body-2 hero-text slider-reveal">
                                Come with family & feel the joy of mouthwatering food
                            </p>
                            <a href="#" className="btn btn-primary slider-reveal">
                                <span className="text text-1">View Our Menu</span>
                                <span className="text text-2" aria-hidden="true">View Our Menu</span>
                            </a>
                        </li>
                    </ul>

                    <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
                        <ion-icon name="chevron-back"></ion-icon>
                    </button>

                    <button className="slider-btn next" aria-label="slide to next" data-next-btn>
                        <ion-icon name="chevron-forward"></ion-icon>
                    </button>

                    <a href="#" className="hero-btn has-after">
                        <img src={heroicon} width="48" height="48" alt="booking icon" />
                        <span className="label-2 text-center span">Book A Table</span>
                    </a>
                </section>
                <Services />
                <About/>
                <Label />
                <Menu />
                <Testimonial />
                <Reservation />
                <Features />
                <Events />


            </article>
        </main>
    )
}
