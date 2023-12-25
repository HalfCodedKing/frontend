import React, { useState, useEffect } from 'react';
import { Card, Input, Select, Spin, Pagination, Checkbox, Slider } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './admin/Navbar';

const { Meta } = Card;
const { Search } = Input;
const { Option } = Select;

const ProductsAll = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  const [filters, setFilters] = useState({
    combo: true,
    type2: true,
    caFinal: true,
    atulAggarwal: true,
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    // Fetch product data from the API
    axios.get('http://localhost:8081/admin/products').then((response) => {
      setProducts(response.data);
      setFilteredProducts(response.data);
      setLoading(false);
    });
  }, []);

  // Handle search input
  const handleSearch = (value) => {
    setSearchTerm(value);
    filterProducts(value, selectedFilter);
  };

  // Handle filter dropdown change
  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    filterProducts(searchTerm, value);
  };

  // Handle checkbox change for filters
  const handleCheckboxChange = (filterType) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: !prevFilters[filterType] }));
    filterProducts(searchTerm, selectedFilter);
  };

  // Handle price range slider change
  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
    filterProducts(searchTerm, selectedFilter);
  };

  // Handle sort order dropdown change
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    filterProducts(searchTerm, selectedFilter);
  };

  // Filter products based on search term, filters, price range, and sort order
  const filterProducts = (search, filter) => {
    let filtered = [...products];

    // Filter by search term
    if (search) {
      const lowerSearch = search.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.productName.toLowerCase().includes(lowerSearch) ||
          product.facultyName.toLowerCase().includes(lowerSearch)
      );
    }

    // Filter by selected filter options
    if (filter) {
      filtered = filtered.filter(
        (product) =>
          (filters.combo && product.productType === 'Combo') ||
          (filters.type2 && product.productType === 'Type2') ||
          (filters.caFinal && product.course === 'CA Final') ||
          (filters.atulAggarwal && product.author === 'Atul Aggarwal')
      );
    }

    // Filter by price range
    filtered = filtered.filter(
      (product) =>
        product.finalPrice >= priceRange[0] && product.finalPrice <= priceRange[1]
    );

    // Sort products
    if (sortOrder === 'asc') {
      filtered.sort((a, b) => a.finalPrice - b.finalPrice);
    } else {
      filtered.sort((a, b) => b.finalPrice - a.finalPrice);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page when applying filters
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '25%', padding: '20px', backgroundColor: '#fff', boxShadow: '1px 1px 6px lightgray', borderRadius: '8px' }}>
          {/* Enhanced and attractive search input */}
          <Search
            placeholder="Search products"
            onSearch={handleSearch}
            enterButton
            style={{
              marginBottom: '16px',
              borderRadius: '8px',
              boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
              border: 'none',
            }}
          />

          {/* Filter by type, course, or author dropdown */}
          <Select
            style={{ width: '100%', marginBottom: '16px' }}
            placeholder="Filter by type, course, or author"
            onChange={handleFilterChange}
          >
            <Option value="">All Types</Option>
            <Option value="Combo">Combo</Option>
            <Option value="Type2">Type 2</Option>
          </Select>

          {/* Checkboxes for filter options */}
          <Checkbox checked={filters.combo} onChange={() => handleCheckboxChange('combo')} style={{ margin: '10px' }}>
            Combo
          </Checkbox>
          <Checkbox checked={filters.type2} onChange={() => handleCheckboxChange('type2')} style={{ margin: '10px' }}>
            Type 2
          </Checkbox>

          {/* Filter by course dropdown */}
          <Select
            style={{ width: '100%', marginBottom: '16px' }}
            placeholder="Filter by course"
            onChange={handleFilterChange}
          >
            <Option value="">All Courses</Option>
            <Option value="CA Final">CA Final</Option>
          </Select>

          {/* Checkbox for CA Final filter */}
          <Checkbox checked={filters.caFinal} onChange={() => handleCheckboxChange('caFinal')} style={{ margin: '10px' }}>
            CA Final
          </Checkbox>

          {/* Filter by author dropdown */}
          <Select
            style={{ width: '100%', marginBottom: '16px' }}
            placeholder="Filter by author"
            onChange={handleFilterChange}
          >
            <Option value="">All Authors</Option>
            <Option value="Atul Aggarwal">Atul Aggarwal</Option>
          </Select>

          {/* Checkbox for Atul Aggarwal filter */}
          <Checkbox checked={filters.atulAggarwal} onChange={() => handleCheckboxChange('atulAggarwal')} style={{ margin: '10px' }}>
            Atul Aggarwal
          </Checkbox>

          {/* Price range slider */}
          <div style={{ marginTop: '20px' }}>
            <p style={{ marginBottom: '8px', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>Price Range</p>
            <Slider
              range
              step={1}
              defaultValue={[0, 1000]}
              max={1000}
              onChange={handlePriceRangeChange}
            />
            <p>Rs {priceRange[0]} - Rs {priceRange[1]}</p>
          </div>

          {/* Sort by dropdown */}
          <Select
            style={{ width: '100%', marginTop: '16px' }}
            placeholder="Sort by"
            onChange={handleSortOrderChange}
          >
            <Option value="asc">Price: Low to High</Option>
            <Option value="desc">Price: High to Low</Option>
          </Select>
        </div>

        {/* Product Cards */}
        <div style={{ flex: 1, padding: '20px' }}>
          {loading ? (
            <Spin size="large" />
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
              {currentProducts.map((product) => (
                <Link key={product.id} to={`/admin/products/view/${product.id}`}>
                  <Card
                    style={{ width: '300px', margin: '15px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}
                    cover={<img alt={product.productName} src={product.image.split(',')[0]} height={150} style={{ borderRadius: '8px 8px 0 0' }} />}
                  >
                    <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>Rs {product.finalPrice}</p>
                    <Meta title={product.productName} description={product.author.split(',')[0]} />
                  </Card>
                </Link>
              ))}
            </div>
          )}
          {/* Pagination */}
          <Pagination
            style={{ marginTop: '20px', textAlign: 'center' }}
            current={currentPage}
            total={filteredProducts.length}
            pageSize={productsPerPage}
            onChange={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsAll;
