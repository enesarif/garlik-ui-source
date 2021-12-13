import { get, post } from "./main"

export const getCharts = () => {
    return get('/api/charts');
}

export const addChart = (chartInfo) => {
    console.log({ chartInfo });
    return post('/api/charts', chartInfo);
}
