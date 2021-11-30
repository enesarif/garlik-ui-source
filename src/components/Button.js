import MUIButton from "@mui/material/Button";

export const Button = ({ children, ...rest }) =>
    <MUIButton fullWidth style={{ height: '100%' }} {...rest}>{children}</MUIButton>
