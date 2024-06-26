import Category from "@/components/Ui/Category/Category";
import { Box, Container, Grid } from "@mui/material";

const CategoryLayout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Category />
          </Grid>
          <Grid item xs={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryLayout;
