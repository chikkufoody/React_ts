import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { Alert, Snackbar } from "@mui/material";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertContextProps {
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<AlertType>("info");

  const showAlert = (msg: string, severity: AlertType = "info") => {
    setMessage(msg);
    setType(severity);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity={type} variant="filled">
          {message}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
