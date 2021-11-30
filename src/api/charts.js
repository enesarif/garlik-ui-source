import { get } from "./main"

export const getCharts = () => {
    return get('/api/charts');
}
