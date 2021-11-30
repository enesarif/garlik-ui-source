import { Grid, Typography } from "@mui/material";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";

export const Charts = () => {
    return <Grid container spacing={2} style={{ marginTop: '24px' }} justifyContent="right">
        <Grid item xs={12} style={{ marginBottom: '24px' }}>
            <Typography variant="h3">Grafikleri Düzenle</Typography>
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
