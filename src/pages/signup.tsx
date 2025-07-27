import { useContext, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import AuthService from '../services/authService';
import { AuthContext, type AuthContextType } from '../context/data-context';


const SignUpPage = () => {
  
  const {setUser} = useContext(AuthContext) as AuthContextType;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add real validation and API calls here

    const { email, password } = formData;
    const signedUpData = await AuthService.signUp({email, password});
    if(signedUpData){
      setUser(signedUpData);
    }
     
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, p: 3, boxShadow: 2, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Create an Account
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default SignUpPage;
