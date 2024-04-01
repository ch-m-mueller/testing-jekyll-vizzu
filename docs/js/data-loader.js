    const data = {
	  series: [
		{ name: 'Year', type: 'dimension' },
		{ name: 'Format', type: 'dimension' },
		{ name: 'Revenue', type: 'measure', unit: '' }
	  ],
	  records: []
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

export default data