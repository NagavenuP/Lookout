import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchText } from "../store/products";
function Header() {
  const dispatch = useDispatch();
  const cartList = useSelector((state) => state?.cart?.items);
  const cartItemCount = Object.keys(cartList).length;
  const handleProductSearch = (event) => {
    dispatch(searchText(event?.target?.value));
  };
  const debounceSearch = () => {
    let timer;
    return function () {
      const args = arguments;
      clearInterval(timer);
      timer = setTimeout(() => {
        handleProductSearch.apply(this, args);
      }, 500);
    };
  };
  return (
    <div className="app-header">
      <div></div>
      <div>
        <input
          className="search-box"
          placeholder="Search for products"
          onChange={debounceSearch()}
        />
      </div>
      <Link to="/products" className="nav-item">
        Products
      </Link>
      <Link to="/cart" className="nav-item">
        Cart
        {cartItemCount > 0 && <div className="cart-badge">{cartItemCount}</div>}
      </Link>
    </div>
  );
}

export default Header;
