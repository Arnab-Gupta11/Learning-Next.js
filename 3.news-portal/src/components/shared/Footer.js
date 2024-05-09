import { Box, Button, Container, IconButton, MenuItem, Typography } from "@mui/material";
//Icon
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
const navItem = [
  {
    route: "Home",
    path: "/",
  },
  {
    route: "Pages",
    path: "/pages",
  },
  {
    route: "Category",
    path: "/category",
  },
  {
    route: "News",
    path: "/news",
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];
const Footer = () => {
  return (
    <Box className="bg-black py-10">
      <Container>
        <Box sx={{ "& svg": { color: "white" }, textAlign: "center" }}>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box className="w-full" sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center", color: "white" }}>
          {navItem.map((item) => (
            <MenuItem key={item}>
              <Link href={item.path}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            </MenuItem>
          ))}
        </Box>
        <Typography variant="body2" textAlign="center" color="gray">
          @2023 The News Portal
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
