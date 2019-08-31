import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import words from './helpers/words';
import { LanguageContext } from './contexts/LanguageContext';

export default withStyles(styles)(function Navbar(props) {
	const { classes } = props;
	const { language } = useContext(LanguageContext);
	const { darkMode, toggleTheme } = useContext(ThemeContext);
	const { search, signin, emoji } = words[language];

	return (
		<div className={classes.root}>
			<AppBar position='static' color={darkMode ? 'primary' : 'default'}>
				<Toolbar>
					<IconButton className={classes.menuButton} color='inherit'>
						<span role='img'>{emoji}</span>
					</IconButton>
					<Typography className={classes.title} variant='h6' color='inherit'>
						{signin}
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
