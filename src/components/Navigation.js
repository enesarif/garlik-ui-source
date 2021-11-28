import { Face, Home, Logout, Timeline } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router";

const pages = [
    {
        title: "Anasayfa",
        icon: <Home />,
        route: "/",
    },
    {
        title: "Grafik Ekle",
        icon: <Timeline />,
        route: "/add-chart",
    },
    {
        title: true ? "Giriş Yap" : "Çıkış Yap",
        icon: true ? < Face /> : < Logout />,
        route: "/login",
    },
]

export const Navigation = () => {
    const navigate = useNavigate();

    return <List>
        {pages.map(({ title, icon, route }) => (
            <ListItem button key={title} onClick={() => navigate(route)}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItem>
        ))}
    </List>;
}
