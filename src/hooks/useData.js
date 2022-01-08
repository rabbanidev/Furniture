import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("auth");
const useCartState = createPersistedState("cart");

const useData = () => {
  const [user, setUser] = useAuthState(null);
  const [cartItems, setCartItems] = useCartState([]);

  const addToCart = (currentProduct) => {
    const alreadyAdded = cartItems.find(
      (cartProduct) => cartProduct.productId === currentProduct.productId
    );
    if (alreadyAdded) {
      const newItems = cartItems.map((cartItem) => {
        return cartItem.productId === alreadyAdded.productId
          ? currentProduct
          : cartItem;
      });
      setCartItems(newItems);
    } else {
      setCartItems([...cartItems, currentProduct]);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    setUser,
    cartItems,
    setCartItems,
    addToCart,
    signOut,
  };
};

export default useData;
