import { useNavigate } from "react-router-dom";

export const useNavigationUtils = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  const navigateTo = (path: string, replace?: boolean) => {
    navigate(path, { replace });
  };

  return { navigateBack, navigateTo };
};
