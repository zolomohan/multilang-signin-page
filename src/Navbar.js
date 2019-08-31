import React, { Component } from 'react';
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
import { withLanguageContext } from './contexts/LanguageContext';

const words = {
	english : {
		search : 'Search',
		signin : 'Sign In',
		emoji  : '🇺🇸'
	},
	spanish : {
		search : 'Buscar',
		signin : 'Registrarse',
		emoji  : '🇪🇸'
	},
	french  : {
		search : 'chercher',
		signin : 'Se connecter',
		emoji  : '🇫🇷'
	}
};

class Navbar extends Component {
	static contextType = ThemeContext;
	render() {
		const { darkMode, toggleTheme } = this.context;
		const { classes, languageContext } = this.props;
		const { search, signin, emoji } = words[languageContext.language];
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
	}
}
export default withLanguageContext(withStyles(styles)(Navbar));
