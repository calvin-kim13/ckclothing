import "./product-card.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const openNotification = () => {
    notification.open({
      message: "Added item to cart",
      duration: 1,
    });
  };

  const addProductToCart = async () => {
    if (currentUser) {
      await addItemToCart(product);
      await openNotification();
      return;
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
