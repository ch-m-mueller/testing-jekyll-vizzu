    const data = {
	  series: [
		{ name: 'Year', type: 'dimension' },
		{ name: 'Format', type: 'dimension' },
		{ name: 'Revenue', type: 'measure', unit: '' }
	  ],
	  records: [
		['2000', 'Aveiro', '5'],
		['2000', 'Braga', '10'],
		['2001', 'Aveiro', '9'],
		['2001', 'Braga', '14']
	  ]
    }


const config = {
  locateFile: filename => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.2/${filename}`
}


initSqlJs(config).then(function(SQL){
	
  const xhr = new XMLHttpRequest();
  // For example: https://github.com/lerocha/chinook-database/raw/master/ChinookDatabase/DataSources/Chinook_Sqlite.sqlite
  xhr.open('GET', '/testing-jekyll-vizzu/data.db', true);
  xhr.responseType = 'arraybuffer';

  xhr.onload = e => {
    const uInt8Array = new Uint8Array(xhr.response);
    const db = new SQL.Database(uInt8Array);
    const contents = db.exec("SELECT year, dimension, CAST(measure as TEXT) as measure FROM measure_per_year_and_dimension");
	data['records'] = contents[0].values;


  };
  xhr.send();



});




/*const data = {
	series: [
		{ name: 'Year', type: 'dimension' },
		{ name: 'Format', type: 'dimension' },
		{ name: 'Revenue', type: 'measure', unit: 'm$' }
	],
	records: [
		['2000', 'Vinyl', '81'],
		['2000', 'DVD', '424'],
		['2000', 'Cassette', '948'],
		['2000', 'CD', '20075'],
		['2001', 'Vinyl', '86'],
		['2001', 'DVD', '490'],
		['2001', 'Cassette', '531'],
		['2001', 'CD', '18982'],
		['2002', 'Vinyl', '65'],
		['2002', 'Cassette', '302'],
		['2002', 'DVD', '427'],
		['2002', 'CD', '17355'],
		['2003', 'Vinyl', '61'],
		['2003', 'Cassette', '152'],
		['2003', 'DVD', '574'],
		['2003', 'CD', '15888'],
		['2004', 'Streaming', '10'],
		['2004', 'Cassette', '33'],
		['2004', 'Vinyl', '54'],
		['2004', 'Download', '251'],
		['2004', 'DVD', '841'],
		['2004', 'CD', '15726'],
		['2005', 'Cassette', '17'],
		['2005', 'Vinyl', '36'],
		['2005', 'Streaming', '225'],
		['2005', 'Other', '560'],
		['2005', 'Download', '666'],
		['2005', 'DVD', '813'],
		['2005', 'CD', '13969'],
		['2006', 'Cassette', '5'],
		['2006', 'Vinyl', '33'],
		['2006', 'Streaming', '307'],
		['2006', 'DVD', '582'],
		['2006', 'Other', '996'],
		['2006', 'Download', '1125'],
		['2006', 'CD', '12049'],
		['2007', 'Cassette', '4'],
		['2007', 'Vinyl', '34'],
		['2007', 'Streaming', '337'],
		['2007', 'DVD', '609'],
		['2007', 'Other', '1321'],
		['2007', 'Download', '1669'],
		['2007', 'CD', '9324'],
		['2008', 'Cassette', '1'],
		['2008', 'Vinyl', '72'],
		['2008', 'DVD', '275'],
		['2008', 'Streaming', '386'],
		['2008', 'Other', '1178'],
		['2008', 'Download', '2054'],
		['2008', 'CD', '6585'],
		['2009', 'Vinyl', '80'],
		['2009', 'DVD', '255'],
		['2009', 'Streaming', '436'],
		['2009', 'Other', '1098'],
		['2009', 'Download', '2361'],
		['2009', 'CD', '5217'],
		['2010', 'Vinyl', '108'],
		['2010', 'DVD', '212'],
		['2010', 'Streaming', '548'],
		['2010', 'Other', '763'],
		['2010', 'Download', '2665'],
		['2010', 'CD', '4028'],
		['2011', 'Vinyl', '143'],
		['2011', 'DVD', '174'],
		['2011', 'Other', '547'],
		['2011', 'Streaming', '752'],
		['2011', 'Download', '3021'],
		['2011', 'CD', '3573'],
		['2012', 'DVD', '132'],
		['2012', 'Vinyl', '187'],
		['2012', 'Other', '384'],
		['2012', 'Streaming', '1164'],
		['2012', 'CD', '2807'],
		['2012', 'Download', '3236'],
		['2013', 'DVD', '118'],
		['2013', 'Vinyl', '237'],
		['2013', 'Other', '327'],
		['2013', 'Streaming', '1616'],
		['2013', 'CD', '2382'],
		['2013', 'Download', '3136'],
		['2014', 'DVD', '100'],
		['2014', 'Vinyl', '273'],
		['2014', 'Other', '283'],
		['2014', 'CD', '1947'],
		['2014', 'Streaming', '1998'],
		['2014', 'Download', '2719'],
		['2015', 'DVD', '83'],
		['2015', 'Other', '285'],
		['2015', 'Vinyl', '370'],
		['2015', 'CD', '1580'],
		['2015', 'Download', '2464'],
		['2015', 'Streaming', '2546'],
		['2016', 'DVD', '64'],
		['2016', 'Other', '296'],
		['2016', 'Vinyl', '389'],
		['2016', 'CD', '1221'],
		['2016', 'Download', '1930'],
		['2016', 'Streaming', '4179'],
		['2017', 'DVD', '40'],
		['2017', 'Other', '285'],
		['2017', 'Vinyl', '417'],
		['2017', 'CD', '1103'],
		['2017', 'Download', '1412'],
		['2017', 'Streaming', '5721'],
		['2018', 'DVD', '30'],
		['2018', 'Other', '322'],
		['2018', 'Vinyl', '438'],
		['2018', 'CD', '718'],
		['2018', 'Download', '1038'],
		['2018', 'Streaming', '7491'],
		['2019', 'DVD', '28'],
		['2019', 'Other', '307'],
		['2019', 'Vinyl', '492'],
		['2019', 'CD', '639'],
		['2019', 'Download', '810'],
		['2019', 'Streaming', '8992'],
		['2020', 'DVD', '29'],
		['2020', 'Other', '287'],
		['2020', 'CD', '484'],
		['2020', 'Vinyl', '626'],
		['2020', 'Download', '653'],
		['2020', 'Streaming', '10075']
	]
}*/

export default data