import { BLACK_OLIVE } from "../constants/colors";
import { Header } from "./Header";

export const ChartHeader = ({ children, ...rest }) =>
    <Header
        variant="h4"
        additionalStyles={{ color: BLACK_OLIVE }}
        {...rest}
    >
        {children}
    </Header>;
