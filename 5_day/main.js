console.log('start')
const people = ['Beck, Glenn','Becker, Carl','Beckett, Samuel',
				'Beddoes, Mick','Beecher, Henry','Beethoven, Judwig',
				'Begin, Menachem','Belloc, Hilaire','Bellow, Saul',
				'Benchley, Robert','Benenson, Peter','Ben-Gurion, David',
				'Benjamin, Walter','Benn, Tony','Bennington, Chester',
				'Benson, Leana','Bent, Silas','Bentsen, Lloyd','Berger, Ric',
				'Bergman, Ingmar','Berio, Luciano','Berley, Milton',
				'Berlin, Irving','Berne Eric','Bernard, Sandra','Berra, Yogi',
				'Berry, Haley','Berry, Wendell','Bethea, Erin','Bevan, Aneurin',
				'Bevel, Ken','Biden, Joseph','Bierce, Ambrose','Biko, Steve',
				'Billings, Josh','Biondo, Frank','Birrell, Augustine',
				'Black, Elk','Blair, Robert','Blair, Tony','Blake, William'];

const inventors = [
		{first:'Albert', last:'Einstein', year: 1879, passed: 1955},
		{first:'Issac', last:'Newton', year: 1643, passed: 1727},
		{first:'Galileo', last:'Galilei', year: 1564, passed: 1642},
		{first:'Marie', last:'Curie', year: 1867, passed: 1934},
		{first:'Johannes', last:'Kepler', year: 1571, passed: 1630},
		{first:'Nicolaus', last:'Copernicus', year: 1473, passed: 1543},
		{first:'Max', last:'Planck', year: 1858, passed: 1947}
]

// array.prototype.filfer()
// 1. Filter the list of inventors for Born in the 1500's

const fifteen = inventors.filter(
	inventor => (inventor.year >= 1500 && inventor.year < 1600)
	) 
	  // arrow version of: 
	  //  function(inventor){
	  // 	if (inventor.year >= 1500 && inventor.year < 1600){
	  //    return true; // keep it
	
console.table(fifteen);


// array.prototype.map()
// 2. Give ana array of the inventors first and last names

const fullNames = inventors.map(inventor => inventor.first +' '+ inventor.last);
// console.log (fullNames)

// array.prototype. sort()
// 3. sort inventory by birthdate, oldest to youngest.

const ordered = inventors.sort(function(first, second){
	if (first.year > second.year){
		return 1;
	}else{
		return -1;
	}
});

const order = inventors.sort((a,b) => a.year > b.year ? 1: -1);

// console.table (order)

// array.prototype.reduce()
// 4. How many years did all inventors live

const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year);
}, 0);

// console.log(totalYears)

// 5. sort inventors by years livied

const oldest = inventors.sort((a,b) => (a.passed - a.year) > (b.passed - b.year) ? -1: 1);

console.table(oldest)

// 6. create list of Boulebards in Paris that contain 'de' 
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(querySelectorAll('a'));
// const de = links
// 			.map(link => link.textContent)
// 			.filter(streetName => streetName.include('de'));

// Sort people reverse alphabetically
// 7. sort Exercise

const alpha = people.sort((lastP, nextP)=>{
	const [aLast, aFirst] = lastP.split(', ')
	const [bLast, bFirst] = nextP.split(', ')
	return aLast > bLast ? -1: 1;
})
console.log(alpha)

// Sum up instance of easch of these
// 8. Reduce

const data = ['car','car','truck','truck','bike','walk','car','van','bike','walk'
,'car','van','car','truck'];

const trans = data.reduce(function(obj, item){
	if (!obj[item]){
		obj[item]=0;
	}
	obj[item]++;
	
	return obj;
},{

})
console.log(trans)