import { useState, useCallback } from "react";

export const useDialog = (initialOpen = false) => {
  const [isDialogOpen, setDialogOpen] = useState(initialOpen);

  const openDialog = useCallback(() => {
    setDialogOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setDialogOpen(false);
  }, []);

  const toggleDialog = useCallback(() => {
    setDialogOpen((prevOpen) => !prevOpen);
  }, []);

  return {
    isDialogOpen,
    openDialog,
    closeDialog,
  };
};
