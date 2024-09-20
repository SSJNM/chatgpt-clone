import {useState}  from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Chatgpt-Clone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

function LoginPage() {
  const [isRegistered,setIsRegistered] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSigninSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username')
    const password = data.get('password')
    console.log(username,password)
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login/', {
        username,
        password,
      });
        const token = response.data.token;
        localStorage.setItem('token', token); // Store token in local storage
        navigate('/')
        setError('');
        // onLogin(token);

    } catch (e) {
        console.log(e.response.data.error)
        setError(e.response.data.error);
        console.log(error)
    }
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email')
    const username = data.get('username')
    const password = data.get('password')

    console.log(username,password)
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register/', {
        email,
        username,
        password,
      });
      console.log(response.data)
      setError('');
    } catch (e) {
      setError('Unable to Register User');
      console.log(error)
    }
  };

  const handleSwitch = () => {
    setIsRegistered(!isRegistered)
  }

  const signinContent = 
  <>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome back !
            </Typography>
            {/* Conditionally render the error message */}
            {error && (
                <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                  {error}
                </Typography>
              )}

            <Box component="form" noValidate onSubmit={handleSigninSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <span
                    className="text-blue-500 hover:text-blue-800 cursor-pointer"
                    onClick={handleSwitch}
                    >
                    Forgot Password?
                    </span>
                </Grid>
                <Grid item>
                  <span
                  className="text-blue-500 hover:text-blue-800 cursor-pointer"
                  onClick={handleSwitch}
                  >
                  Signup
                  </span>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
  </>

const registerContent = 
<>
  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Hi there !
          </Typography>
          {/* Conditionally render the error message */}
          {error && (
              <Typography variant="body2" color="error" sx={{ mt: 2 }}>
                {error}
              </Typography>
            )}

          <Box component="form" noValidate onSubmit={handleRegisterSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container className='flex justify-center items-center'>
                <Grid item className='text-center'>
                  <span
                  className="text-blue-500 hover:text-blue-800 cursor-pointer"
                  onClick={handleSwitch}
                  >
                  Already Have an Account ? Sign in
                  </span>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
</>



  const content = isRegistered ? signinContent : registerContent

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url("https://www.klippa.com/wp-content/uploads/2023/01/ChatGPT-preview.jpg")',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          {content}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default LoginPage;