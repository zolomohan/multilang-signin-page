import React, { useContext } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import words from './helpers/words';

export default withStyles(styles)(function Navbar(props) {
	const { classes } = props;
	const { language } = useContext(LanguageContext);
	const { darkMode, toggleTheme } = useContext(ThemeContext);
	const { search, emoji } = words[language];

	return (
		<div className={classes.root}>
			<AppBar position='static' color={darkMode ? 'primary' : 'default'}>
				<Toolbar>
					<span role='img' className={classes.flag}>{emoji}</span>
					<Typography className={classes.title} variant='h6' color='inherit'>
						Dark Mode
					</Typography>
					<Switch onClick={toggleTheme} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={search}
							classes={{
								root  : classes.inputRoot,
								input : classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
});
