import { Grid } from "@mui/material"
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts"
import { CHART_GRID } from "../constants/colors"
import { ChartHeader } from "./ChartHeader"

export const Chart = ({ color, name, domain, data, ...rest }) => {
    return <Grid item xs="auto" {...rest}>
        <ChartHeader>{name}</ChartHeader>
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{ top: 5, right: 32, bottom: 5, left: 0 }}
                style={{ marginLeft: '-12px' }}
            >
                <CartesianGrid stroke={CHART_GRID} />
                <Line dataKey="price" stroke={color} unit="₺" name={name} />
                <XAxis dataKey="day" tickMargin={8} />
                <YAxis domain={domain} tickMargin={4} tickFormatter={(tick) => tick.toFixed(2)} />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer >
    </Grid >
}
