import { getCategoriesNews } from "@/utils/getCategoriesNews";
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const DynamicCategory = async ({ searchParams }) => {
  console.log(searchParams.category);
  const { data: categoryNews } = await getCategoriesNews(searchParams.category);
  console.log(categoryNews);
  return (
    <Box className="border rounded-md">
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <Typography variant="h5">Categories</Typography>
        <Divider className="mt-2" />
      </Box>
      <Grid sx={{ px: 2.5, py: 2.5 }} mt="2.5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {categoryNews?.map((news) => {
          return (
            <Grid item xs={6} key={news.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "250px",
                      },
                    }}
                  >
                    <Image src={news.thumbnail_url} width="1000" height="100" alt="top news" />
                  </CardMedia>

                  <CardContent>
                    <Typography gutterBottom variant="h6">
                      {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {news.details.length > 200 ? news.details.slice(0, 200) + "..." : news.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DynamicCategory;
