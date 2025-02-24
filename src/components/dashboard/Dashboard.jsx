import React from "react";
import { Typography } from "antd";
// import { Line } from "@ant-design/charts";
import "antd/dist/reset.css";

const Dashboard = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [form] = Form.useForm();
    // const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

    //   const salesData = [
    //     { date: "2024-02-01", sales: 500 },
    //     { date: "2024-02-02", sales: 700 },
    //     { date: "2024-02-03", sales: 650 },
    //   ];

    // const DashboardContent = () => (
    //     <Typography.Title level={4}>Dashboard Overview</Typography.Title>
    // );

    return (
        <Typography.Title style={{ color: "black", margin: 0 }}>Dashboard Loading..</Typography.Title>
        // <Layout style={{ minHeight: "100vh" }}>
        //     <HeaderComponent />
        //     <Layout>
        //         <SiderComponent />
        //         <Content style={{ padding: 20 }}>
        //             <Order />
        //             <Products />
        //             <Modal title="Manage Inventory" open={isModalOpen} onCancel={() => setIsModalOpen(false)} onOk={() => form.submit()}>
        //                 <Form form={form} layout="vertical">
        //                     <Form.Item name="name" label="Product Name" rules={[{ required: true }]}> <Input /> </Form.Item>
        //                     <Form.Item name="sku" label="SKU" rules={[{ required: true }]}> <Input /> </Form.Item>
        //                     <Form.Item name="price" label="Price" rules={[{ required: true }]}> <InputNumber min={0} style={{ width: "100%" }} /> </Form.Item>
        //                     <Form.Item name="stock" label="Stock Quantity" rules={[{ required: true }]}> <InputNumber min={0} style={{ width: "100%" }} /> </Form.Item>
        //                     <Form.Item name="status" label="Status" valuePropName="checked"> <Switch /> </Form.Item>
        //                 </Form>
        //             </Modal>
        //         </Content>
        //     </Layout>

        //     <Layout>
        //     </Layout>
        // </Layout>
    );
};

export default Dashboard;
