import createPersistedState from "use-persisted-state";
const useAuthState = createPersistedState("auth");
const useMenuState = createPersistedState("menu");

const useData = () => {
  const [user, setUser] = useAuthState(null);
  const [menubar, setMenubar] = useMenuState(null);

  const signOut = () => {
    setUser(null);
  };

  return {
    user,
    setUser,
    menubar,
    setMenubar,
    signOut,
  };
};

export default useData;
