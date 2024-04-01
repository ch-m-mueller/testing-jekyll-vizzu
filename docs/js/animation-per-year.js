import Vizzu from 'https://cdn.jsdelivr.net/npm/vizzu@0.10/dist/vizzu.min.js';
import data from '/testing-jekyll-vizzu/js/data-loader.js'

await new Promise(r => setTimeout(r, 2000));


const year_from = 2000;
const year_to   = 2023;

const chart = new Vizzu('myVizzu', { data })

let actYear = ''
let anim = chart.initializing

function drawYear(event) {
	event.renderingContext.font = '200 80px Roboto'
	event.renderingContext.fillStyle = '#737373FF'
	event.renderingContext.fillText(actYear, 1000, 500)
}

anim = anim.then((chart) => {
	chart.on('logo-draw', drawYear)
	return chart
})

for (let year = year_from; year <= year_to; year++) {
	anim = anim.then((chart) => {
		actYear = year
		return chart.animate(
			{
				data: {
					filter: (record) => parseInt(record.Year) === year
				},
				config: {
					channels: {
						y: { set: ['Format'] },
						x: { set: ['Revenue'] },
						label: { set: ['Revenue'] },
						color: { attach: ['Format'] }
					},
					title: 'New tourism establishments in Portugal',
					sort: 'byValue'
				},
				style: {
					fontSize: 15,
					title: {
						fontWeight: 150
					},
					plot: {
						paddingLeft: 300,
						paddingTop: 50,
						yAxis: {
							color: '#ffffff00',
							label: {
								paddingRight: 20
							}
						},
						xAxis: {
							title: { color: '#ffffff00' },
							label: { color: '#ffffff00', numberFormat: 'grouped' }
						},
						marker: {
							colorPalette:
								'#b74c20FF #c47f58FF #1c9761FF #ea4549FF #875792FF #3562b6FF #ee7c34FF #efae3aFF',
							label: {
								maxFractionDigits: 0
							}
						}
					}
				}
			},
			{
				duration: 2,
				delay: 0,
				x: { easing: 'linear', delay: 0 },
				y: { delay: 0 },
				show: { delay: 0 },
				hide: { delay: 0 },
				title: { duration: 0, delay: 0 }
			}
		)
	})
}

anim = anim.then((chart) => {
	chart.on('plot-axis-label-draw', (event) => {
		const year = parseFloat(event.target.value)
		if (!isNaN(year) && year % 5 !== 0) event.preventDefault()
	})
	return chart.animate(
		{
			config: {
				channels: {
					x: { attach: ['Year'] },
					label: { set: null }
				}
			}
		},
		{
			delay: 2.5,
			duration: 0.3
		}
	)
})

anim = anim.then((chart) => {
	chart.off('logo-draw', drawYear)
	return chart
})

anim = anim.then((chart) =>
	chart.animate(
		{
			data: {
				filter: (record) => record.Year === String(year_to) || record.Year === String(year_from)
			},
			config: {
				title: 'Total of new tourism establishments in Portugal from 2000 to 2023'
			}
		},
		{
			delay: 0,
			duration: 2
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				sort: 'none'
			}
		},
		{
			delay: 0,
			duration: 2
		}
	)
)

for (let year = year_to; year >= year_from; year--) {
	anim = anim.then((chart) =>
		chart.animate(
			{
				data: {
					filter: (record) => parseInt(record.Year) >= year || record.Year === String(year_from)
				},
				config: {
					split: true
				},
				style: {
					'plot.xAxis.interlacing.color': '#ffffff'
				}
			},
			{
				delay: 0,
				duration: 0.005
			}
		)
	)
}

anim = anim.then((chart) =>
	chart.animate(
		{
			data: {
				filter: (record) => record.Year !== STRING(year_from)
			},
			config: {
				split: false
			}
		},
		{
			delay: 0,
			duration: 1.5
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				channels: {
					x: { detach: ['Year'] }
				}
			}
		},
		{
			delay: 0,
			duration: 0
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				channels: {
					label: { set: ['Revenue'] }
				}
			}
		},
		{
			delay: 0,
			duration: 0.1
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				channels: {
					x: { attach: ['Year'] },
					label: { detach: ['Revenue'] }
				}
			}
		},
		{
			delay: 4,
			duration: 1
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				channels: {
					x: { set: ['Year'] },
					y: { set: ['Revenue', 'Format'], range: { min: 'auto', max: 'auto' } },
					color: { set: ['Format'] }
				},
				title: 'Number of new tourism establishments in Portugal from 2000 to 2023',
				split: true
			},
			style: {
				plot: {
					paddingLeft: 13,
					paddingTop: 50,
					xAxis: {
						label: {
							angle: 2.0,
							// fontSize: 14,
							color: '#8e8e8e'
						}
					},
					yAxis: {
						interlacing: { color: '#ffffff00' },
						title: { color: '#ffffff00' },
						label: { color: '#ffffff00' }
					}
				}
			}
		},
		{
			delay: 0,
			duration: 2
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				geometry: 'area'
			}
		},
		{
			delay: 0,
			duration: 1
		}
	)
)

anim = anim.then((chart) =>
	chart.animate(
		{
			config: {
				channels: {
					x: { set: ['Year'] },
					y: {
						range: {
							max: '110%'
						}
					}
				},
				align: 'center',
				split: false
			},
			style: {
				plot: {
					marker: { borderWidth: 1 }
				}
			}
		},
		{
			delay: 4,
			duration: 2
		}
	)
)