import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

function SuccessAlert({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack sx={{ width: "50%" }} spacing={2}>
      {visible && (
        <Alert variant="outlined" severity="success">
          {message}
        </Alert>
      )}
    </Stack>
  );
}

export default SuccessAlert;
