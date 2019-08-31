import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
	english : {
		email    : 'Email',
		password : 'Password',
		remember : 'Remember Me',
		signin   : 'Sign In'
	},
	french  : {
		email    : 'Addresse Electronique',
		password : 'Mot de passe',
		remember : 'Souviens-toi de moi',
		signin   : 'Se connecter'
	},
	spanish : {
		email    : 'Sorreo electrónico',
		password : 'Sontraseña',
		remember : 'Recuérdame',
		signin   : 'Registrarse'
	}
};

class Form extends Component {
	static contextType = LanguageContext;
	render() {
		const { changeLanguage, language } = this.context;
		const { classes } = this.props;
		const { email, password, remember, signin } = words[language];
		return (
			<main className={classes.main}>
				<Paper className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography variant='h5'>{signin}</Typography>
					<Select value={language} onChange={(event) => changeLanguage(event.target.value)}>
						<MenuItem value='english'>English</MenuItem>
						<MenuItem value='french'>French</MenuItem>
						<MenuItem value='spanish'>Spanish</MenuItem>
					</Select>
					<form className={classes.form}>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='email'>{email}</InputLabel>
							<Input id='email' name='email' autoFocus />
						</FormControl>
						<FormControl margin='normal' required fullWidth>
							<InputLabel htmlFor='password'>{password}</InputLabel>
							<Input id='password' name='password' />
						</FormControl>
						<FormControlLabel control={<Checkbox color='primary' />} label={remember} />
						<Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>
							{signin}
						</Button>
					</form>
				</Paper>
			</main>
		);
	}
}
export default withStyles(styles)(Form);
