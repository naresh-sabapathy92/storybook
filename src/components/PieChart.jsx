import React from 'react'
import { DonutChart } from "bizcharts";

const PieChart = ({ plotData,
    radius = 1,
    innerRadius = 0,
    label,
    legend,
    forceFit = true,
    width = 900,
    height = 450,
    angleField = 'value',
    colorField = 'type',
    color,
}) => {

    return (
        <>
            <DonutChart
                data={plotData || []}
                statistic={{
                    title: false,
                    content: false
                }}
                radius={radius}
                innerRadius={innerRadius}
                label={label}
                legend={legend}
                forceFit={forceFit}
                width={width}
                height={height}
                angleField={angleField}
                colorField={colorField}
                color={color}
            />
        </>
    )
}

export default PieChart
