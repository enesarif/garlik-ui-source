import { Chart } from "../components/Chart"
import { KEPPEL } from "../constants/colors"

const data = [
    {
        day: '24.11.21',
        price: 12.38,
    },
    {
        day: '25.11.21',
        price: 12.45,
    },
    {
        day: '26.11.21',
        price: 12.50,
    },
    {
        day: '27.11.21',
        price: 12.46,
    },
    {
        day: '28.11.21',
        price: 12.43,
    },
]

export const Home = () => <div>
    <Chart color={KEPPEL} name="Dolar" domain={[12.0, 13.0]} data={data} />
</div>
