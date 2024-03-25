import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const getPasswordStrengthColor = (strength) => {
	switch (strength) {
	  case 'Strong':
		return 'success.main';
	  case 'Medium':
		return 'warning.main';
	  case 'Weak':
		return 'error.main';
	  default:
		return 'text.primary';
	}
};

function App() {

	const [username, setUsername] = useState('');
  	const [password, setPassword] = useState('');
  	const [passwordStrength, setPasswordStrength] = useState('');
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordChange = (event) => {
		const newPassword = event.target.value;
		setPassword(newPassword);

		const strength =
		newPassword.length >= 8 ? 'Strong' : newPassword.length >= 5 ? 'Medium' : 'Weak';
		setPasswordStrength(strength);
	};

	const handleTogglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	  
	const handleLogin = () => {
		console.log('Username:', username);
		console.log('Password:', password);
	};
	return (
		<>
			<ThemeProvider theme={theme}>
				<Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
					<Grid item>
					<Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', textAlign: 'center' }}>
						<Typography variant="h5" gutterBottom>
						Login
						</Typography>
						<TextField
						label="Username"
						fullWidth
						margin="normal"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
						label="Password"
						fullWidth
						margin="normal"
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={handlePasswordChange}
						InputProps={{
							endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={handleTogglePasswordVisibility} edge="end">
								{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
							),
						}}
						/>
						{passwordStrength && (
						<Typography
							variant="caption"
							color={getPasswordStrengthColor(passwordStrength)}
						>
							Password Strength: {passwordStrength}
						</Typography>
						)}
						<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={handleLogin}
						style={{ marginTop: '16px' }}
						>
						Login
						</Button>
					</Paper>
					</Grid>
				</Grid>
    		</ThemeProvider>
		</>
	);
}

export default App;
