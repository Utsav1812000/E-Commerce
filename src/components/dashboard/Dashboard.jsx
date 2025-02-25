import React from "react";
import "antd/dist/reset.css";
import OrderSummary from "../orders/OrderSummary";
import SalesAnalyticsChart from "../../common/charting/SalesAnalyticsChart ";
import { Card, Row, Col } from "antd";

const Dashboard = () => {
    const salesData = [
        { date: "2024-02-01", sales: 5000 },
        { date: "2024-02-05", sales: 12000 },
        { date: "2024-02-10", sales: 8000 },
        { date: "2024-02-15", sales: 15000 },
        { date: "2024-02-20", sales: 13000 },
        { date: "2024-02-25", sales: 18000 },
    ];

    return (
        <div style={{ width: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <OrderSummary
                totalOrders={150}
                pendingOrders={20}
                completedOrders={130}
                revenue={450000.75}
            />
            <Card title="Sales Analytics" bordered >
                <Row gutter={[12, 12]} justify="space-between">
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <SalesAnalyticsChart salesData={salesData} />
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default Dashboard;
