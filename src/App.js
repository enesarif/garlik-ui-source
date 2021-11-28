import { Container } from '@mui/material';
import { Chart } from './components/Chart';
import { CHART_LINE } from './constants/colors';

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

function App() {
    return (
        <Container maxWidth="sm">
            <Chart color={CHART_LINE} name="Dolar" domain={[12.0, 13.0]} data={data} />
        </Container>
    );
}

export default App;
