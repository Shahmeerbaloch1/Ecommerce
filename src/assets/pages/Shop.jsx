import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Herosection from '../Components/Herosection';
import { product } from '../context/ProductContext';
import { products1 } from '..';

const Shop = () => {
  let { getProducts } = useContext(product);
  let [filterByCategory, setFilterByCategory] = useState([]);
  let [filterBySubCategory, setFilterBySubCategory] = useState([]);
  let [filterProducts, setFilterProducts] = useState([]);
  let [searchQuery, setSearchQuery] = useState('');
  let [sortOrder, setSortOrder] = useState('default');

  // Handle category filter selection
  let getCategoryValue = (e) => {
    if (filterByCategory.includes(e.target.value)) {
      setFilterByCategory(filterByCategory.filter((item) => item !== e.target.value));
    } else {
      setFilterByCategory([...filterByCategory, e.target.value]);
    }
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter and sort products based on state changes
  useEffect(() => {
    let filteredProducts = getProducts.filter((product,index) => {
      const matchesCategory = filterByCategory.length === 0 || filterByCategory.includes(products1[index].catagories);
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting logic
    if (sortOrder == 'LowtoHigh') {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder == 'HightoLow') {
      filteredProducts.sort((a, b) => b.price - a.price);
    } 

    setFilterProducts(filteredProducts);
  }, [filterByCategory, filterBySubCategory, searchQuery, sortOrder, getProducts]);

  return (
    <>
      <Navbar />
      <Herosection />
      <div className="w-full flex flex-row space-x-6 px-60 py-4 justify-between items-center">
        <div className="w-1/4">
          <h3 className="font-bold bg-cyan-500 text-white text-center py-4">DEPARTMENTS</h3>
        </div>
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Search entire store here..."
            className="w-full px-7 py-4 border rounded-md text-sm focus:outline-none"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="w-full flex space-x-6 px-60 py-6">
        <div className="w-1/4 shadow-xl h-[63vh] bg-[#f6f6f8a3]">
          <h3 className="font-bold text-2xl text-center mb-4 text-[#222222]">Filter</h3>
          <div className="space-y-4 mt-14">
            <div className="border-2 rounded-md p-4 m-3">
              <h4 className="font-semibold ml-12 text-lg mt-5 text-[#222222]">Categories</h4>
              <div>
                <label className="block ml-12">
                  <input
                    type="checkbox"
                    value="Men"
                    className="mr-2 mt-6 text-[#222222]"
                    onChange={getCategoryValue}
                  />
                  Men
                </label>
                <label className="block ml-12">
                  <input
                    type="checkbox"
                    value="Women"
                    className="mr-2 mt-3 text-[#222222]"
                    onChange={getCategoryValue}
                  />
                  Women
                </label>
                <label className="block ml-12">
                  <input
                    type="checkbox"
                    value="Kids"
                    className="mr-2 mt-3 text-[#222222]"
                    onChange={getCategoryValue}
                  />
                  Kids
                </label>
                
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/4 shadow-base">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-3xl text-[#222222]">Products</h3>
            <select
              className="border px-4 py-2 rounded-md text-sm"
              onChange={(e) => setSortOrder(e.target.value)}
              value={sortOrder}
            >
              <option value="default">Sort Prizes</option>
              <option value="LowtoHigh">Price - Low to High</option>
              <option value="HightoLow">Price - High to Low</option>
            </select>
          </div>

          <div className="flex flex-wrap justify-between">
            {filterProducts.map((product, index) => (
              <Link
                onClick={() => scrollTo(0, 0)}
                to={`/detail/${product.id}`}
                state={{ product }}
                key={index}
                style={{ textDecoration: 'none' }}
              >
                <div className="product-card cursor-pointer flex-1 w-[215px] mb-6 p-4 ">
                  <img
                    src={product.Img}
                    alt={product.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                  <p className="text-md font-medium mt-1">${product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
