import { BLACK_OLIVE } from "../constants/colors";

export const ChartHeader = ({ children, ...rest }) =>
    <h2 style={{ color: BLACK_OLIVE }} {...rest}>{children}</h2>
