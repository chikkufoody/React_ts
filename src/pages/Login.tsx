import { useState } from "react";
import {
    Box,
    Button,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useAlert } from "../components/Alert";


const Login = () => {
    const { showAlert } = useAlert();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState<{ [key: string]: boolean }>({});

    const validate = () => {
        const errors: { [key: string]: boolean } = {};
        if (!formValues.email) {
            errors.email = true;
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = true;
        }
        if (!formValues.password) {
            errors.password = true;
        } else if (formValues.password.length < 6) {
            errors.true = true;
        }

        return errors;
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setFormErrors({
            ...formErrors,
            [name]: !value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log("✅ Logging in with:", formValues);
            // TODO: API call / redirect
            showAlert("Login successful!", "success");
        }
        else {
            showAlert("Enter a valid email", "error");
        }
    };

    return (
        <Box
            sx={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "grey.100",
            }}
        >

            <Paper elevation={3} sx={{ p: 4, width: 350 }}>
                <Typography variant="h5" align="center" gutterBottom>
                    Login
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                        name="email"
                        label="Email"
                        size="small"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={formErrors.email}
                    />

                    <TextField
                        name="password"
                        size="small"
                        label="Password"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        error={formErrors.password}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
