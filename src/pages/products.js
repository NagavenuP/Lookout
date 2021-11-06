/**
 * @description Products page which displays list of products.
 */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveProducts } from "../store/products";
import AddRemoveButton from "../components/addRemoveButton";
import { productsInstance } from "../service/product.service";
function Products() {
  const { list, searchText } = useSelector((state) => state?.items);
  const [isLoading, setIsLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    productsInstance.getProducts().then((res) => {
      setIsLoader(false)
      dispatch(saveProducts(res.data))
    }).catch(() => {
      setIsLoader(false)
    })
  }, []);
  const itemUi = (item) => {
    return (
      <div className="product-item" key={item.id}>
        <img alt={item.name} src={item.avatar} />
        <div className="product-detail">
          <div className="product-title">{item.name}</div>
          <div className="product-purchase">
            <span>₹{item.price}</span>
            <AddRemoveButton item={item} />
          </div>
        </div>
      </div>
    );
  };
  let tempSearchText = searchText.toLocaleLowerCase();
  const products = list.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes(tempSearchText)
  );
  return (
    <>
      {isLoading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="products">{products.map(itemUi)}</div>
      )}
    </>
  );
}

export default Products;
