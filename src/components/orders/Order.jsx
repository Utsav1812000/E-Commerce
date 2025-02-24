import React from 'react'
import { Card, Statistic } from "antd";

export default function Order() {
    return (
        <Card title="Order Summary" style={{ marginBottom: 20 }}>
            <Statistic title="Total Orders" value={100} />
            <Statistic title="Pending Orders" value={10} style={{ color: "orange" }} />
            <Statistic title="Completed Orders" value={90} style={{ color: "green" }} />
            <Statistic title="Revenue" value={5000} prefix="$" />
        </Card>
    )
}
