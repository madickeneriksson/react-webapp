import React, {useEffect, useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductsDetailsView';
import CategoriesView from './views/CategoriesView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView'
import NotFoundView from './views/NotFoundView';
import { ProductContext, FeaturedProductsContext, FlashsaleProductsContext } from '../src/context/Contexts'


function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [flashsale, setFlashsale] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchFlashsaleData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=6')
      setFlashsale(await result.json())
    }
    fetchFlashsaleData()

  }, [setProducts, setFeatured, setFlashsale])  

  return (
    <BrowserRouter>
    <ProductContext.Provider value={products}>
    <FeaturedProductsContext.Provider value={featured}>
    <FlashsaleProductsContext.Provider value={flashsale}>
    <Routes>
      <Route path="/" element={<HomeView  />} />
      <Route path="/contacts" element={<ContactsView />} />
      <Route path="/products" element={<ProductsView   />} />
      <Route path="/products/:name" element={<ProductDetailsView />} />
      <Route path="/categories" element={<CategoriesView />} />
      <Route path="/search" element={<SearchView />} />
      <Route path="/compare" element={<CompareView />} />
      <Route path="/wishlist" element={<WishListView />} />
      <Route path="/shoppingcart" element={<ShoppingCartView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
    </FlashsaleProductsContext.Provider>
    </FeaturedProductsContext.Provider>
    </ProductContext.Provider>

    </BrowserRouter>
  );
}

export default App;
