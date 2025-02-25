import React, { useEffect, useState } from "react";
import { Modal, Form, Input, InputNumber, Switch, Button, Spin } from "antd";

const AddProduct = ({ isModalOpen, onClose, onSave, editingProduct, products }) => {
    const [form] = Form.useForm();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue(editingProduct || { name: "", sku: "", price: 0, stock: 0, status: false });
        }
    }, [isModalOpen, editingProduct, form]);

    const handleSave = async () => {
        try {
            const values = await form.validateFields();
            setIsLoading(true);

            setTimeout(() => {
                onSave({ 
                    id: editingProduct ? editingProduct.id :  products.length + 1, 
                    ...values, 
                    status: values.status ? "Active" : "Inactive" 
                });

                setIsLoading(false);
                form.resetFields();
                onClose();
            }, 2000);
        } catch (error) {
            console.log("Validation Failed!", error);
        }
    };

    return (
        <Modal title={editingProduct ? "Edit Product" : "Add Product"} open={isModalOpen} onCancel={onClose} footer={null}>
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
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "20px" }}>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="primary" onClick={handleSave} disabled={isLoading}>
                        {isLoading ? <Spin /> : "Submit"}
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default AddProduct;
