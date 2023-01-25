import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardMedia component={"img"} sx={{ height: 250 }} image={product.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.cost}
        </Typography>
        <Rating value={product.rating} readOnly />
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth onClick={handleAddToCart}>
          <AddShoppingCartOutlined /> Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
