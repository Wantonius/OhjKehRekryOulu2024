import { useState } from 'react'
import ThemeContext,{themes,ThemeType} from './context/ThemeContext';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
	theme:ThemeType;
}


function App() {
	const [state, setState] = useState({
		theme:themes.dark
	})
	
	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}	
	return (
		<>
			<ThemeContext.Provider value={state.theme}>
				<Headline>
				OP aloittaa muutosneuvottelut
				</Headline>
				<Paragraph>
				OP ryhmä aloittaa muutosnevottelut, yhtiön viestinnästä kerrotaan.

Muutostarpeen taustalla on osuuspankkien määrän väheneminen ja pankkien koon kasvaminen osana pitkäaikaista rakennekehitystä, OP:n mediasuhteista vastaava Josi Tikkanen kertoo Ylelle sähköpostitse.
				</Paragraph>
				<ThemeButton toggleTheme={toggleTheme}/>
			</ThemeContext.Provider>
		</>
	)
}

export default App
