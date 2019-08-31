import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';
import words from './helpers/words';

export default withStyles(styles)(function Form(props) {
	const { setLanguage, language } = useContext(LanguageContext);
	const { classes } = props;
	const { email, password, remember, signin } = words[language];
	return (
		<main className={classes.main}>
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h5'>{signin}</Typography>
				<Select value={language} onChange={(event) => setLanguage(event.target.value)}>
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
});
