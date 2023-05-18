import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

function SuccessAlert({ message }) {
  const [visible, setVisible] = useState(true);

  const styles = {
    position: "absolute",
    top: "100%",
    left: "55%",
    right: "0",
    zIndex: "9999",
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack sx={{ width: "40%"}}style={styles} spacing={2}>
      {visible && (
        <Alert variant="outlined" severity="success">
          {message}
        </Alert>
      )}
    </Stack>
  );
}

export default SuccessAlert;
