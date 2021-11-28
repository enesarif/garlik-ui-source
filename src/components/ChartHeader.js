import { CHART_HEADER } from "../constants/colors";

export const ChartHeader = ({ children, ...rest }) =>
    <h2 style={{ color: CHART_HEADER }} {...rest}>{children}</h2>
