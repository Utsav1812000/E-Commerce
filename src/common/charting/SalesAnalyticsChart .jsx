import React from "react";
import { Line } from "@ant-design/charts";

const SalesAnalyticsChart = ({ salesData }) => {
    const config = {
        data: salesData,
        xField: "date",
        yField: "sales",
        point: {
            size: 5,
            shape: "circle",
        },
    };

    return <Line {...config} />;
};

export default SalesAnalyticsChart;