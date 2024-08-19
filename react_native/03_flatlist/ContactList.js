import {useState} from 'react';
import {View,Text,Pressable,FlatList,StyleSheet} from 'react-native';

const ContactList = () => {
	
	const [state,setState] = useState({
		list:[
	{
		"firstname": "Dora",
		"lastname": "Navarro",
		"id": 1
	},
	{
		"firstname": "Odysseus",
		"lastname": "Marshall",
		"id": 2
	},
	{
		"firstname": "Odette",
		"lastname": "Guerra",
		"id": 3
	},
	{
		"firstname": "Alexandra",
		"lastname": "Long",
		"id": 4
	},
	{
		"firstname": "Mechelle",
		"lastname": "May",
		"id": 5
	},
	{
		"firstname": "Conan",
		"lastname": "Carson",
		"id": 6
	},
	{
		"firstname": "Riley",
		"lastname": "Jacobson",
		"id": 7
	},
	{
		"firstname": "Olivia",
		"lastname": "Castro",
		"id": 8
	},
	{
		"firstname": "Hedy",
		"lastname": "Elliott",
		"id": 9
	},
	{
		"firstname": "Jesse",
		"lastname": "Velez",
		"id": 10
	},
	{
		"firstname": "Howard",
		"lastname": "Conrad",
		"id": 11
	},
	{
		"firstname": "Athena",
		"lastname": "Robertson",
		"id": 12
	},
	{
		"firstname": "Chester",
		"lastname": "Shields",
		"id": 13
	},
	{
		"firstname": "Kyla",
		"lastname": "Harper",
		"id": 14
	},
	{
		"firstname": "Carlos",
		"lastname": "Estrada",
		"id": 15
	},
	{
		"firstname": "Candice",
		"lastname": "Heath",
		"id": 16
	},
	{
		"firstname": "Aurelia",
		"lastname": "Knight",
		"id": 17
	},
	{
		"firstname": "Imogene",
		"lastname": "Barnes",
		"id": 18
	},
	{
		"firstname": "Zeus",
		"lastname": "Howell",
		"id": 19
	},
	{
		"firstname": "Daphne",
		"lastname": "Sheppard",
		"id": 20
	},
	{
		"firstname": "Davis",
		"lastname": "Patterson",
		"id": 21
	},
	{
		"firstname": "Pascale",
		"lastname": "Simpson",
		"id": 22
	},
	{
		"firstname": "Adria",
		"lastname": "Stein",
		"id": 23
	},
	{
		"firstname": "Walker",
		"lastname": "Skinner",
		"id": 24
	},
	{
		"firstname": "Zeph",
		"lastname": "Kennedy",
		"id": 25
	},
	{
		"firstname": "Mark",
		"lastname": "Burks",
		"id": 26
	},
	{
		"firstname": "Audra",
		"lastname": "Mckinney",
		"id": 27
	},
	{
		"firstname": "Ursa",
		"lastname": "Bray",
		"id": 28
	},
	{
		"firstname": "Nina",
		"lastname": "Pollard",
		"id": 29
	},
	{
		"firstname": "Geoffrey",
		"lastname": "Jones",
		"id": 30
	},
	{
		"firstname": "Lila",
		"lastname": "Duke",
		"id": 31
	},
	{
		"firstname": "Marshall",
		"lastname": "Owen",
		"id": 32
	},
	{
		"firstname": "Grant",
		"lastname": "Benjamin",
		"id": 33
	},
	{
		"firstname": "Bruce",
		"lastname": "Gay",
		"id": 34
	},
	{
		"firstname": "Timon",
		"lastname": "Blankenship",
		"id": 35
	},
	{
		"firstname": "Adara",
		"lastname": "Houston",
		"id": 36
	},
	{
		"firstname": "Yvette",
		"lastname": "Stevens",
		"id": 37
	},
	{
		"firstname": "Amber",
		"lastname": "Wolf",
		"id": 38
	},
	{
		"firstname": "Asher",
		"lastname": "Smith",
		"id": 39
	},
	{
		"firstname": "Richard",
		"lastname": "Peterson",
		"id": 40
	},
	{
		"firstname": "Myles",
		"lastname": "Huffman",
		"id": 41
	},
	{
		"firstname": "Caldwell",
		"lastname": "Curry",
		"id": 42
	},
	{
		"firstname": "Audrey",
		"lastname": "Serrano",
		"id": 43
	},
	{
		"firstname": "Lisandra",
		"lastname": "Harrell",
		"id": 44
	},
	{
		"firstname": "Ariel",
		"lastname": "Bernard",
		"id": 45
	},
	{
		"firstname": "Neve",
		"lastname": "Lee",
		"id": 46
	},
	{
		"firstname": "Melanie",
		"lastname": "Baird",
		"id": 47
	},
	{
		"firstname": "Amos",
		"lastname": "Clay",
		"id": 48
	},
	{
		"firstname": "Kaseem",
		"lastname": "Vargas",
		"id": 49
	},
	{
		"firstname": "Alvin",
		"lastname": "Boyd",
		"id": 50
	},
	{
		"firstname": "Geoffrey",
		"lastname": "Waller",
		"id": 51
	},
	{
		"firstname": "Teegan",
		"lastname": "Spears",
		"id": 52
	},
	{
		"firstname": "September",
		"lastname": "Hendrix",
		"id": 53
	},
	{
		"firstname": "Macon",
		"lastname": "Ryan",
		"id": 54
	},
	{
		"firstname": "Idola",
		"lastname": "Eaton",
		"id": 55
	},
	{
		"firstname": "Malik",
		"lastname": "Holden",
		"id": 56
	},
	{
		"firstname": "Illiana",
		"lastname": "Gonzalez",
		"id": 57
	},
	{
		"firstname": "Cooper",
		"lastname": "Swanson",
		"id": 58
	},
	{
		"firstname": "Karen",
		"lastname": "Good",
		"id": 59
	},
	{
		"firstname": "Kiona",
		"lastname": "Clarke",
		"id": 60
	},
	{
		"firstname": "Steel",
		"lastname": "Rodriquez",
		"id": 61
	},
	{
		"firstname": "Britanni",
		"lastname": "Craft",
		"id": 62
	},
	{
		"firstname": "Keane",
		"lastname": "Chang",
		"id": 63
	},
	{
		"firstname": "Lee",
		"lastname": "Boone",
		"id": 64
	},
	{
		"firstname": "Rhea",
		"lastname": "Casey",
		"id": 65
	},
	{
		"firstname": "Macaulay",
		"lastname": "Wheeler",
		"id": 66
	},
	{
		"firstname": "Keane",
		"lastname": "Harmon",
		"id": 67
	},
	{
		"firstname": "Colin",
		"lastname": "Moreno",
		"id": 68
	},
	{
		"firstname": "Maya",
		"lastname": "Miles",
		"id": 69
	},
	{
		"firstname": "Veda",
		"lastname": "Lowery",
		"id": 70
	},
	{
		"firstname": "Henry",
		"lastname": "Kemp",
		"id": 71
	},
	{
		"firstname": "Rebekah",
		"lastname": "Dixon",
		"id": 72
	},
	{
		"firstname": "Ralph",
		"lastname": "Kline",
		"id": 73
	},
	{
		"firstname": "Bertha",
		"lastname": "Mcknight",
		"id": 74
	},
	{
		"firstname": "Coby",
		"lastname": "Bright",
		"id": 75
	},
	{
		"firstname": "Zorita",
		"lastname": "Contreras",
		"id": 76
	},
	{
		"firstname": "Indigo",
		"lastname": "Rice",
		"id": 77
	},
	{
		"firstname": "Ian",
		"lastname": "Jensen",
		"id": 78
	},
	{
		"firstname": "Mariko",
		"lastname": "Hammond",
		"id": 79
	},
	{
		"firstname": "Roth",
		"lastname": "Leach",
		"id": 80
	},
	{
		"firstname": "Oren",
		"lastname": "Berger",
		"id": 81
	},
	{
		"firstname": "Lucas",
		"lastname": "Sweeney",
		"id": 82
	},
	{
		"firstname": "Denton",
		"lastname": "Oneil",
		"id": 83
	},
	{
		"firstname": "Reese",
		"lastname": "Munoz",
		"id": 84
	},
	{
		"firstname": "Jaquelyn",
		"lastname": "Palmer",
		"id": 85
	},
	{
		"firstname": "Jonah",
		"lastname": "Carey",
		"id": 86
	},
	{
		"firstname": "Rana",
		"lastname": "Sanders",
		"id": 87
	},
	{
		"firstname": "Christopher",
		"lastname": "Benson",
		"id": 88
	},
	{
		"firstname": "Octavius",
		"lastname": "Neal",
		"id": 89
	},
	{
		"firstname": "Ori",
		"lastname": "Porter",
		"id": 90
	},
	{
		"firstname": "Vivian",
		"lastname": "Richmond",
		"id": 91
	},
	{
		"firstname": "Alec",
		"lastname": "Hooper",
		"id": 92
	},
	{
		"firstname": "Thor",
		"lastname": "Mosley",
		"id": 93
	},
	{
		"firstname": "Ashely",
		"lastname": "Kennedy",
		"id": 94
	},
	{
		"firstname": "Dexter",
		"lastname": "King",
		"id": 95
	},
	{
		"firstname": "Skyler",
		"lastname": "White",
		"id": 96
	},
	{
		"firstname": "Isaiah",
		"lastname": "Figueroa",
		"id": 97
	},
	{
		"firstname": "Fallon",
		"lastname": "Santana",
		"id": 98
	},
	{
		"firstname": "Wing",
		"lastname": "Becker",
		"id": 99
	},
	{
		"firstname": "Jamal",
		"lastname": "Bailey",
		"id": 100
	}
	]
	});
	
	const removeContact = (id) => {
		setState((state) => {
			let tempList = state.list.filter(contact => contact.id !== id);
			return {
				list:tempList
			}
		})
	}
	
	return(
		<View>
			<FlatList data={state.list}
					renderItem={({item}) => {
						return(
							<View style={styles.rowStyle}>
								<Text style={styles.textStyle}>
									{item.firstname} {item.lastname}
								</Text>
								<Pressable style={styles.buttonStyle}
									onPress={() => removeContact(item.id)}>
									<Text>Remove</Text>
								</Pressable>
							</View>
						)
					}}/>
		</View>
	)
}

const styles = StyleSheet.create({
	rowStyle:{
		flexDirection:"row",
		height:80,
		alignItems:"center",
		justifyContent:"space-between"
	},
	textStyle:{
		fontFamily:"sans-serif",
		fontSize:18,
		fontWeight:"bold"
	},
	buttonStyle:{
		width:80,
		height:50,
		borderRadius:5,
		backgroundColor:"red",
		alignItems:"center",
		justifyContent:"center"
	}
})

export default ContactList