import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import TopPickersSection from '../sections/TopPickersSection'
import InfoSection from '../sections/InfoSection'
import { FeaturedProductsContext } from '../context/Contexts'
import { FlashsaleProductsContext } from '../context/Contexts'
import FlashsaleSection from '../sections/FlashsaleSection'
import ExtraPriceSection from '../sections/ExtraPriceSection'



const HomeView = () => {
  const products = useContext(FeaturedProductsContext);
  const flashsale = useContext(FlashsaleProductsContext);

  
  window.top.document.title = 'Fixxo.'

  return (
    <>
    < MainMenuSection />
    < ShowcaseSection />
    < ProductGridSection title="Featured Products" items={products} />
    < TopPickersSection />
    < FlashsaleSection items={flashsale} />
    <ExtraPriceSection items={flashsale} />
    < InfoSection />
    <FooterSection />
    </>
  )
}

export default HomeView