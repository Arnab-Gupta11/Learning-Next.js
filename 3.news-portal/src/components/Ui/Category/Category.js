import { getAllCategories } from "@/utils/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Category = async () => {
  const { data: allCategory } = await getAllCategories();
  // console.log(allCategory);
  return (
    <Box className="bg-slate-200 rounded-md">
      <Box sx={{ px: 2.5, py: 2.5 }}>
        <Typography variant="h5">Categories</Typography>
        <Divider className="mt-2" />
      </Box>
      <Stack spacing={2} sx={{ px: 2.5, py: 2.5 }}>
        {allCategory.map((category) => {
          return (
            <Button variant="outlined" color="secondary" key={category.id}>
              <Link href={`/categories/news?category=${category.title.toLowerCase()}`}>{category.title}</Link>
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Category;
