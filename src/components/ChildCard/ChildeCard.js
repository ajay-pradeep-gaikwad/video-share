import { CardMedia, Grid, Paper } from "@mui/material";
import React from "react";

const itemData = [
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
  "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
  "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
  "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
  "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
];

// eslint-disable-next-line no-lone-blocks
{
  console.log(itemData[4], "imageData");
}

export const ChildeCard = () => {
  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 8, sm: 12, md: 16 }}
      >
        {itemData.map((itemData, key) => (
          <Grid item xs={2} sm={4} md={4}>
            <Paper
              elevation={3}
              sx={{
                height: 200,
                width: 300,
                borderRadius: 2,
                margin: 1,
              }}
            >
              <CardMedia
                sx={{ height: 200, width: 300, borderRadius: 2 }}
                component="image"
                image={itemData}
                alt="Paella dish" />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
