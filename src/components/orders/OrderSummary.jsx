// import React from 'react'
// import { Card, Statistic } from "antd";

// export default function Order() {
//     return (
//         <Card title="Order Summary" style={{ marginBottom: 20 }}>
//             <Statistic title="Total Orders" value={100} />
//             <Statistic title="Pending Orders" value={10} style={{ color: "orange" }} />
//             <Statistic title="Completed Orders" value={90} style={{ color: "green" }} />
//             <Statistic title="Revenue" value={5000} prefix="$" />
//         </Card>
//     )
// }
import React from "react";
import { Card, Statistic, Row, Col } from "antd";
import { ShoppingOutlined, CheckCircleOutlined, HourglassOutlined } from "@ant-design/icons";

const OrderSummary = ({ totalOrders, pendingOrders, completedOrders, revenue }) => {
    return (
        <Card title="Order Summary" bordered >
            <Row gutter={[12,12]} justify="space-between">
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Statistic 
                        title="Total Orders" 
                        value={totalOrders} 
                        prefix={<ShoppingOutlined />} 
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Statistic 
                        title="Pending Orders" 
                        value={pendingOrders} 
                        valueStyle={{ color: "orange" }} 
                        prefix={<HourglassOutlined />} 
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Statistic 
                        title="Completed Orders" 
                        value={completedOrders} 
                        valueStyle={{ color: "green" }} 
                        prefix={<CheckCircleOutlined />} 
                    />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                    <Statistic 
                        title="Revenue" 
                        value={revenue} 
                        precision={2} 
                        prefix="$" 
                        valueStyle={{ color: "blue" }} 
                    />
                </Col>
            </Row>
        </Card>
    );
};

export default OrderSummary;
