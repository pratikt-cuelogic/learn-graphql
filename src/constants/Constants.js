const USER_POOL = [{"name":"Sims Salas","email":"simssalas@bulljuice.com","city":"Shawmut","state":"Puerto Rico","ssn":"(955) 582-3266","dateOfBirth":"1990-04-04"},{"name":"Margarita Parrish","email":"margaritaparrish@bulljuice.com","city":"Utting","state":"New York","ssn":"(802) 424-3256","dateOfBirth":"1990-04-04"},{"name":"Felicia Delgado","email":"feliciadelgado@bulljuice.com","city":"Marbury","state":"West Virginia","ssn":"(878) 562-3546","dateOfBirth":"1990-04-04"},{"name":"Allison Castaneda","email":"allisoncastaneda@bulljuice.com","city":"Longbranch","state":"Michigan","ssn":"(900) 496-3977","dateOfBirth":"1990-04-04"},{"name":"Janis Gonzalez","email":"janisgonzalez@bulljuice.com","city":"Boomer","state":"Minnesota","ssn":"(862) 593-3548","dateOfBirth":"1990-04-04"},{"name":"Maura Moses","email":"mauramoses@bulljuice.com","city":"Herbster","state":"Guam","ssn":"(849) 595-3919","dateOfBirth":"1990-04-04"},{"name":"Earline Craig","email":"earlinecraig@bulljuice.com","city":"Crown","state":"Nebraska","ssn":"(991) 537-2817","dateOfBirth":"1990-04-04"},{"name":"April Ortiz","email":"aprilortiz@bulljuice.com","city":"Yukon","state":"American Samoa","ssn":"(931) 402-2490","dateOfBirth":"1990-04-04"},{"name":"Jefferson Buckner","email":"jeffersonbuckner@bulljuice.com","city":"Itmann","state":"Ohio","ssn":"(961) 595-3544","dateOfBirth":"1990-04-04"},{"name":"Dianna Olson","email":"diannaolson@bulljuice.com","city":"Fingerville","state":"Massachusetts","ssn":"(934) 574-2416","dateOfBirth":"1990-04-04"},{"name":"Keller Joyner","email":"kellerjoyner@bulljuice.com","city":"Como","state":"Delaware","ssn":"(948) 579-3911","dateOfBirth":"1990-04-04"},{"name":"York Rocha","email":"yorkrocha@bulljuice.com","city":"Stewartville","state":"Kentucky","ssn":"(813) 458-3810","dateOfBirth":"1990-04-04"},{"name":"Marjorie Vazquez","email":"marjorievazquez@bulljuice.com","city":"Finderne","state":"Federated States Of Micronesia","ssn":"(991) 447-2038","dateOfBirth":"1990-04-04"},{"name":"Glass Valentine","email":"glassvalentine@bulljuice.com","city":"Westphalia","state":"Rhode Island","ssn":"(840) 525-2981","dateOfBirth":"1990-04-04"},{"name":"Joseph Chapman","email":"josephchapman@bulljuice.com","city":"Jacumba","state":"District Of Columbia","ssn":"(852) 544-3119","dateOfBirth":"1990-04-04"},{"name":"Berg Juarez","email":"bergjuarez@bulljuice.com","city":"Bellamy","state":"Pennsylvania","ssn":"(815) 560-3213","dateOfBirth":"1990-04-04"},{"name":"Cabrera Phelps","email":"cabreraphelps@bulljuice.com","city":"Hillsboro","state":"Alaska","ssn":"(842) 579-3125","dateOfBirth":"1990-04-04"},{"name":"Coleen Phillips","email":"coleenphillips@bulljuice.com","city":"Loma","state":"California","ssn":"(818) 565-2617","dateOfBirth":"1990-04-04"},{"name":"Julia Merrill","email":"juliamerrill@bulljuice.com","city":"Fairmount","state":"Virginia","ssn":"(994) 550-3390","dateOfBirth":"1990-04-04"},{"name":"Chang Barron","email":"changbarron@bulljuice.com","city":"Smeltertown","state":"Oklahoma","ssn":"(810) 573-2527","dateOfBirth":"1990-04-04"},{"name":"Buchanan William","email":"buchananwilliam@bulljuice.com","city":"Groton","state":"Arizona","ssn":"(938) 458-3819","dateOfBirth":"1990-04-04"},{"name":"Christa Hurley","email":"christahurley@bulljuice.com","city":"Coinjock","state":"Washington","ssn":"(814) 501-2336","dateOfBirth":"1990-04-04"},{"name":"Morrow Cortez","email":"morrowcortez@bulljuice.com","city":"Colton","state":"New Jersey","ssn":"(812) 524-2311","dateOfBirth":"1990-04-04"},{"name":"Sandy Mcbride","email":"sandymcbride@bulljuice.com","city":"Clay","state":"Illinois","ssn":"(834) 574-3358","dateOfBirth":"1990-04-04"},{"name":"Hayden Morton","email":"haydenmorton@bulljuice.com","city":"Bluetown","state":"Nevada","ssn":"(939) 533-2954","dateOfBirth":"1990-04-04"},{"name":"Patty Chen","email":"pattychen@bulljuice.com","city":"Dunlo","state":"Northern Mariana Islands","ssn":"(913) 414-3420","dateOfBirth":"1990-04-04"},{"name":"Tamika Wise","email":"tamikawise@bulljuice.com","city":"Juntura","state":"Tennessee","ssn":"(875) 453-3665","dateOfBirth":"1990-04-04"},{"name":"Diana Abbott","email":"dianaabbott@bulljuice.com","city":"Camino","state":"Wisconsin","ssn":"(973) 525-2173","dateOfBirth":"1990-04-04"},{"name":"Rachelle Stuart","email":"rachellestuart@bulljuice.com","city":"Lopezo","state":"Connecticut","ssn":"(872) 449-2427","dateOfBirth":"1990-04-04"},{"name":"Bridgette Miranda","email":"bridgettemiranda@bulljuice.com","city":"Breinigsville","state":"Indiana","ssn":"(947) 480-2190","dateOfBirth":"1990-04-04"},{"name":"Delia Nash","email":"delianash@bulljuice.com","city":"Vaughn","state":"Montana","ssn":"(947) 563-3187","dateOfBirth":"1990-04-04"},{"name":"Christie Harding","email":"christieharding@bulljuice.com","city":"Stevens","state":"Utah","ssn":"(863) 455-2741","dateOfBirth":"1990-04-04"},{"name":"Patricia White","email":"patriciawhite@bulljuice.com","city":"Vallonia","state":"North Dakota","ssn":"(938) 501-3805","dateOfBirth":"1990-04-04"},{"name":"Cantu Powers","email":"cantupowers@bulljuice.com","city":"Southmont","state":"South Dakota","ssn":"(964) 540-2900","dateOfBirth":"1990-04-04"}];

export const RANDOM_USER = () => {
	return USER_POOL[Math.floor(Math.random() * USER_POOL.length)]
}
/*
reference: https://www.json-generator.com/
*/
