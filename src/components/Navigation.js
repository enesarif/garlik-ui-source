import { Face, Home, Logout, Timeline } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const pages = [
    {
        title: "Anasayfa",
        icon: <Home />
    },
    {
        title: "Grafik Ekle",
        icon: <Timeline />
    },
    {
        title: true ? "Giriş Yap" : "Çıkış Yap",
        icon: true ? < Face /> : < Logout />
    },
]

export const Navigation = () => <List>
    {pages.map(({ title, icon }) => (
        <ListItem button key={title} onClick={() => console.log("tik")}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={title} />
        </ListItem>
    ))}
</List>
