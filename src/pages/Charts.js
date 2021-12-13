import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { addChart, getCharts } from "../api/charts";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { TextInput } from "../components/TextInput";

export const Charts = () => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        getCharts().then(data => console.log({ data }));
    }, []);

    const handleTextInput = (setter, event) => setter(event.target.value);
    const handleUrlInput = event => handleTextInput(setUrl, event);
    const handleNameInput = event => handleTextInput(setName, event);

    return <Grid container spacing={2} justifyContent="right">
        <Grid item xs={12}>
            <Header variant="h4">Grafikleri Düzenle</Header>
        </Grid>
        <Grid item xs={12}>
            <TextInput label="URL" value={url} onChange={handleUrlInput} />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextInput label="Name" value={name} onChange={handleNameInput} />
        </Grid>
        <Grid item xs={12} md={6}>
            <TextInput label="Parsing Method" />
        </Grid>
        <Grid item xs={12} md={4}>
            <Button onClick={() => addChart({ url, name })}>Ekle</Button>
        </Grid>
    </Grid>
};
