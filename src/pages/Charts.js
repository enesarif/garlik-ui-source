import { Grid } from "@mui/material";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";

export const Charts = () => {
    return <Grid container spacing={2} justifyContent="right">
        <Grid item xs={12}>
            <Header variant="h4">Grafikleri Düzenle</Header>
        </Grid>
        <Grid item xs={12}>
            <TextInput label="URL" />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextInput label="Name" />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextInput label="Parsing Method" />
        </Grid>
        <Grid item xs={12} md={4}>
            <Button>Ekle</Button>
        </Grid>
    </Grid>
};
