// src/components/Products.js
import React, { useEffect, useState } from "react";
import { Table, Button, Form, Card, Modal, Input, InputNumber, Switch } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Column } = Table;

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const [products, setProducts] = useState([
        { id: 1, name: "Product A", sku: "SKU123", price: 50, stock: 20, status: "Active" },
        { id: 2, name: "Product B", sku: "SKU124", price: 70, stock: 15, status: "Inactive" },
    ]);
    // const products = [
    //     { id: 1, name: "Product A", sku: "SKU123", price: 50, stock: 20, status: "Active" },
    //     { id: 2, name: "Product B", sku: "SKU124", price: 70, stock: 15, status: "Inactive" },
    // ];

    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue(editingProduct || { name: "", sku: "", price: 0, stock: 0, status: false });
        }
    }, [isModalOpen, editingProduct, form]);

    // useEffect(() => {
    //     if (editingProduct) {
    //         form.setFieldsValue({
    //             name: editingProduct.name,
    //             sku: editingProduct.sku,
    //             price: editingProduct.price,
    //             stock: editingProduct.stock,
    //             status: editingProduct.status === "Active",
    //         });
    //     } else {
    //         form.resetFields();
    //     }
    // }, [editingProduct, form]);

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const newProduct = {
                id: editingProduct ? editingProduct.id : products.length + 1,
                name: values.name,
                sku: values.sku,
                price: values.price,
                stock: values.stock,
                status: values.status ? "Active" : "Inactive"
            };

            if (editingProduct) {
                setProducts(products.map(p => (p.id === editingProduct.id ? newProduct : p)));
            } else {
                setProducts([...products, newProduct]);
            }

            form.resetFields();
            setIsModalOpen(false);
            setEditingProduct(null);
        } catch (error) {
            console.log("Validation Failed!", error);
        }
    };

    const openAddModal = () => {
        form.resetFields();
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
    }

    return (
        <Card title="Product Listing" 
        extra={<Button type="primary" onClick={openAddModal}> Add New Product </Button>}>
            <Table dataSource={products} rowKey="id">
                <Column title="Name" dataIndex="name" />
                <Column title="SKU" dataIndex="sku" />
                <Column title="Price" dataIndex="price" render={(price) => `$${price}`} />
                <Column title="Stock" dataIndex="stock" />
                <Column title="Status" dataIndex="status" />
                <Column
                    title="Actions"
                    render={(p) => (
                        <>
                            <Button icon={<EditOutlined />} onClick={() => openEditModal(p)} />
                            <Button icon={<DeleteOutlined />} danger style={{ marginLeft: 8 }} onClick={() => deleteProducts(p.id)} />
                        </>
                    )}
                />
            </Table>

            {/* Inventory Management Modal */}
            <Modal title={editingProduct ? "Edit Product" : "Add Product"} open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={handleOk}>
                <Form form={form} layout="vertical">
                    <Form.Item name="name" label="Product Name" rules={[{ required: true, message: "Please enter product name" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="sku" label="SKU" rules={[{ required: true, message: "Please enter SKU" }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="price" label="Price" rules={[{ required: true, message: "Please enter price" }]}>
                        <InputNumber min={0} style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="stock" label="Stock Quantity" rules={[{ required: true, message: "Please enter stock quantity" }]}>
                        <InputNumber min={0} style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="status" label="Status" valuePropName="checked">
                        <Switch />
                    </Form.Item>
                </Form>
            </Modal>
        </Card>
    );
};

export default Products;
