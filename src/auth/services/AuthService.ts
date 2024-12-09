import { useCallback } from "react";

export const useAuth = () => {
  const logout = useCallback(() => {
    // Logic to log out the user
    console.log("User logged out");
    // Optionally clear user state and redirect
  }, []);

  return { logout };
};
