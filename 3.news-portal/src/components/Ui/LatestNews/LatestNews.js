import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import topNews from "@/assets/top-news.png";
import Image from "next/image";

const LatestNews = () => {
  return (
    <Box className="mx-5">
      <Typography variant="h4" className="font-bold">
        Latest News
      </Typography>
      <Divider className="mb-5" />
      <Card>
        <CardActionArea>
          <CardMedia />
          <Image src={topNews} width="1000" alt="top news" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              Bitcoin climbs as Elone Mask says Tesla Likely to accept it again
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero enim cupiditate, sit quis provident voluptatibus adipisci. Esse
              iusto veniam impedit dicta alias molestias hic, ipsa, corrupti eum quam explicabo.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Box className="mt-8">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia />
                <Image src={topNews} alt="top news" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bitcoin climbs as Elone Mask says Tesla Likely to accept it again
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero enim cupiditate, sit quis provident voluptatibus adipisci.
                    Esse iusto veniam impedit dicta alias molestias hic, ipsa, corrupti eum quam explicabo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia />
                <Image src={topNews} alt="top news" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bitcoin climbs as Elone Mask says Tesla Likely to accept it again
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero enim cupiditate, sit quis provident voluptatibus adipisci.
                    Esse iusto veniam impedit dicta alias molestias hic, ipsa, corrupti eum quam explicabo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia />
                <Image src={topNews} alt="top news" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bitcoin climbs as Elone Mask says Tesla Likely to accept it again
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero enim cupiditate, sit quis provident voluptatibus adipisci.
                    Esse iusto veniam impedit dicta alias molestias hic, ipsa, corrupti eum quam explicabo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardActionArea>
                <CardMedia />
                <Image src={topNews} alt="top news" />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    Bitcoin climbs as Elone Mask says Tesla Likely to accept it again
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi libero enim cupiditate, sit quis provident voluptatibus adipisci.
                    Esse iusto veniam impedit dicta alias molestias hic, ipsa, corrupti eum quam explicabo.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestNews;
