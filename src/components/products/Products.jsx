// src/components/Products.js
import React, { useState } from "react";
import { Table, Button, Card, Input } from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { ProductData } from "./ProductData";
import AddProduct from "./AddProduct";

const { Column } = Table;

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [products, setProducts] = useState(ProductData);
    const [filteredProducts, setFilteredProducts] = useState(ProductData);
    const [editingProduct, setEditingProduct] = useState(null);
  

    const handleSaveProduct = (newProduct) => {
        if (editingProduct) {
            setProducts(products.map(p => (p.id === editingProduct.id ? newProduct : p)));
            setFilteredProducts(filteredProducts.map(p => (p.id === editingProduct.id ? newProduct : p)));
        } else {
            setProducts([...products, newProduct]);
            setFilteredProducts([...filteredProducts, newProduct]);
        }
    };

    const openAddModal = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    // Open modal for editing a product
    const openEditModal = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const deleteProducts = (pId) => {
        const updatedProductList = products.filter(product => product.id !== pId);
        setProducts(updatedProductList);
        setFilteredProducts(updatedProductList);
    };

    const handleSearch = (e) => {
        const value =  e.target.value.toLowerCase();
        setSearchText(value);
        if(!value){
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(item => 
                item.name.toLowerCase().includes(value) || 
                item.sku.toLowerCase().includes(value)  ||
                item.status.toLowerCase().includes(value)
            );
            setFilteredProducts(filtered);
        }
    };

    return (
        <Card title="Product Listing" 
        extra={
        <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "flex-end" }}>
            <Input
                    placeholder="Search products..."
                    value={searchText}
                    onChange={handleSearch}
                    prefix={<SearchOutlined />}
                    style={{ width: "60%", maxWidth: 300 }}
                />
            <Button type="primary" onClick={openAddModal} style={{ minWidth: "150px" }}> Add New Product </Button>
        </div>
        }>
            <Table dataSource={filteredProducts} rowKey="id" scroll={{ x: "max-content" }} pagination={{ pageSize: 5 }}>
                <Column title="Name" dataIndex="name" />
                <Column title="SKU" dataIndex="sku" />
                <Column title="Price" dataIndex="price" render={(price) => `$${price}`} sorter={(a, b) => a.price - b.price} />
                <Column title="Stock" dataIndex="stock" sorter={(a, b) => a.stock - b.stock} />
                <Column title="Status" dataIndex="status" sorter={(a, b) => a.status.localeCompare(b.status)} />
                <Column
                    title="Actions"
                    render={(p) => (
                        <div style={{ display: "flex", gap: "8px" }}>
                            <Button icon={<EditOutlined />} onClick={() => openEditModal(p)} />
                            <Button icon={<DeleteOutlined />} danger onClick={() => deleteProducts(p.id)} />
                        </div>
                    )}
                />
            </Table>

            {/* Inventory Management Modal */}
            <AddProduct
                isModalOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProduct}
                editingProduct={editingProduct}
                products={products}
            />
        </Card>
    );
};

export default Products;
