import { Grid } from "@mui/material"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { CHART_GRID } from "../constants/colors"
import { ChartHeader } from "./ChartHeader"

export const Chart = ({ color, name, domain, data, ...rest }) => {
    return <Grid item xs="auto" {...rest}>
        <ChartHeader>{name}</ChartHeader>
        <LineChart
            data={data}
            width={600}
            height={300}
            margin={{ top: 5, right: 32, bottom: 5, left: 0 }}
            style={{ marginLeft: '-32px' }}
        >
            <CartesianGrid stroke={CHART_GRID} />
            <Line dataKey="price" stroke={color} unit="₺" name={name} />
            <XAxis dataKey="day" tickMargin={8} />
            <YAxis domain={domain} tickMargin={4} tickFormatter={(tick) => tick.toFixed(2)} />
            <Tooltip />
        </LineChart>
    </Grid>
}
