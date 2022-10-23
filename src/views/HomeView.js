import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPickersSection from '../sections/TopPickersSection'


const HomeView = () => {
  const [featuredProducts, setFeaturedProducts ] = useState ([
    { id: 1, name: "Modern Orange Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13142521/pexels-photo-13142521.jpeg?cs=srgb&dl=pexels-%D0%B3%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D0%BB%D0%B0%D1%81%D0%B0%D0%B5%D0%B2%D0%B0-13142521.jpg&fm=jpg&_gl=1*1dsps0q*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0MTEwOS4zLjEuMTY2NjU0MTc0OS4wLjAuMA.."},
    { id: 2, name: "Modern Blanket", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/8151601/pexels-photo-8151601.jpeg?cs=srgb&dl=pexels-anna-tarazevich-8151601.jpg&fm=jpg&_gl=1*eh0rgh*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0MTEwOS4zLjEuMTY2NjU0MTg3NS4wLjAuMA.."},
    { id: 3, name: "Modern Cat House", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13442289/pexels-photo-13442289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "Modern Bracelet", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/9367446/pexels-photo-9367446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 5, name: "Modern Rings", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/4259093/pexels-photo-4259093.jpeg?cs=srgb&dl=pexels-harper-sunday-4259093.jpg&fm=jpg&_gl=1*37fwm7*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0NDYzOS40LjAuMTY2NjU0NDYzOS4wLjAuMA.."},
    { id: 6, name: "Modern Beige Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13918752/pexels-photo-13918752.jpeg?cs=srgb&dl=pexels-eugenia-remark-13918752.jpg&fm=jpg&_gl=1*19eytf1*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0NDYzOS40LjEuMTY2NjU0NDY5NS4wLjAuMA.."},
    { id: 7, name: "Modern Knitted", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/2112713/pexels-photo-2112713.jpeg?cs=srgb&dl=pexels-lucas-pezeta-2112713.jpg&fm=jpg&_gl=1*105winq*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0NDYzOS40LjEuMTY2NjU0NDgyNC4wLjAuMA.."},
    { id: 8, name: "Modern Black Skirt", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/1329540/pexels-photo-1329540.jpeg?cs=srgb&dl=pexels-this-is-zun-1329540.jpg&fm=jpg&_gl=1*18wmebh*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0NDYzOS40LjEuMTY2NjU0NDgwMS4wLjAuMA.."}
  ])
  const [topProducts, setTopProducts ] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13142521/pexels-photo-13142521.jpeg?cs=srgb&dl=pexels-%D0%B3%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0-%D0%BB%D0%B0%D1%81%D0%B0%D0%B5%D0%B2%D0%B0-13142521.jpg&fm=jpg&_gl=1*1dsps0q*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0MTEwOS4zLjEuMTY2NjU0MTc0OS4wLjAuMA.."},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/8151601/pexels-photo-8151601.jpeg?cs=srgb&dl=pexels-anna-tarazevich-8151601.jpg&fm=jpg&_gl=1*eh0rgh*_ga*NjgxNzIwODk0LjE2NjU1NzU4Mjk.*_ga_8JE65Q40S6*MTY2NjU0MTEwOS4zLjEuMTY2NjU0MTg3NS4wLjAuMA.."},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/13442289/pexels-photo-13442289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "35.00", rating: 5, img: "https://images.pexels.com/photos/9367446/pexels-photo-9367446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])
  return (
    <>
    < MainMenuSection />
    < ShowcaseSection />
    < ProductGridSection title="Featured Products" products={featuredProducts} />
    < ProductGridSection title="Top Products" products={topProducts} />
    < TopPickersSection />
    <FooterSection />
    </>
  )
}

export default HomeView