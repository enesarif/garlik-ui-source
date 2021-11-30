import { Typography } from "@mui/material";

export const Header = ({ children, additionalStyles, ...rest }) =>
    <Typography
        noWrap
        style={{ marginBottom: '24px', ...additionalStyles }}
        {...rest}
    >
        {children}
    </Typography>;
