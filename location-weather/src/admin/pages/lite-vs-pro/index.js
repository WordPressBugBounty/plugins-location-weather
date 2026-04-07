import { __ } from '@wordpress/i18n';
import InfoText from '../../dashboard-parts/infoText';
import { VideoTooltipIcon } from '../../../icons';
import { ProIconFill } from '../../icons';

const features = [
	{
		title: __( 'All Core Plugin Features', 'location-weather' ),
		info: __(
			'Access all the essential features of the plugin in the free version.',
			'location-weather'
		),
		free: 'yes',
		pro: 'yes',
	},
	{
		title: __( 'Weather Blocks', 'location-weather' ),
		free: 9,
		pro: 16,
		new: true,
		hot: true,
	},
	{
		title: __( 'Pre-made Weather Templates ', 'location-weather' ),
		free: 7,
		pro: 33,
	},
	{
		title: __( 'Ready-to-use Weather Patterns', 'location-weather' ),
		free: <b>20+</b>,
		pro: <b>100+</b>,
		new: true,
		hot: true,
	},
	{
		title: __( 'Extended Weather Forecasts', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Display Daily Forecast up to 30 Days', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __(
			'Display Hourly (1h & 3h) Forecast up to 120 Hours',
			'location-weather'
		),
		free: 'yes',
		pro: 'yes',
	},
	{
		title: __(
			'Weather AI Assistant',
			'location-weather'
		),
		new: true,
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Detailed Weather in Popup View', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( '46+ Years of Weather Historical Data', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Weather Dynamic Graph Chart', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Custom Weather Search', 'location-weather' ),
		free: 'no',
		pro: 'yes',
		video: 'https://ps.w.org/location-weather/assets/visuals/custom-weather-search.webm',
		new: true,
		hot: true,
	},
	{
		title: __( 'Control Styles Globally', 'location-weather' ),
		free: 'yes',
		pro: 'yes',
		new: true,
	},
	{
		title: __( 'Automatic User Location Detection', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __(
			'Temperature Units (°C, °F, Auto, etc.)',
			'location-weather'
		),
		info: __(
			'Select your preferred temperature format: °Celsius, °Fahrenheit, or set Auto (location-based) to show weather data',
			'location-weather'
		),
		free: 2,
		pro: 5,
	},
	{
		title: __( 'Current Weather Data Display Options', 'location-weather' ),
		info: (
			<>
				{ __(
					'Customize which current weather data you want to show, including:'
				) }
				<ul>
					<li>
						{ __( 'Weather Condition Icon', 'location-weather' ) }
					</li>
					<li>{ __( 'Temperature', 'location-weather' ) }</li>
					<li>
						{ __( 'Low & High Temperature', 'location-weather' ) }
					</li>
					<li>{ __( 'Real Feel', 'location-weather' ) }</li>
					<li>{ __( 'Weather Description', 'location-weather' ) }</li>
				</ul>
			</>
		),
		free: 3,
		pro: 5,
	},
	{
		title: __(
			'Additional Weather Data Display Options',
			'location-weather'
		),
		info: (
			<>
				{ __(
					'Customize which additional weather data you want to show, including:'
				) }
				<ul>
					<li>{ __( 'Humidity', 'location-weather' ) }</li>
					<li>{ __( 'Pressure', 'location-weather' ) }</li>
					<li>{ __( 'Wind', 'location-weather' ) }</li>
					<li>{ __( 'Wind Gust', 'location-weather' ) }</li>
					<li>{ __( 'UV Index', 'location-weather' ) }</li>
					<li>{ __( 'Precipitation', 'location-weather' ) }</li>
					<li>{ __( 'Dew Point', 'location-weather' ) }</li>
					<li>{ __( 'Cloud Cover', 'location-weather' ) }</li>
					<li>{ __( 'Rain Chances', 'location-weather' ) }</li>
					<li>{ __( 'Snow', 'location-weather' ) }</li>
					<li>{ __( 'Visibility', 'location-weather' ) }</li>
					<li>{ __( 'Sunrise & Sunset', 'location-weather' ) }</li>
					<li>{ __( 'Air Quality', 'location-weather' ) }</li>
					<li>{ __( 'Moonrise & Moonset', 'location-weather' ) }</li>
					<li>{ __( 'Moon Phase', 'location-weather' ) }</li>
				</ul>
			</>
		),
		free: 7,
		pro: 15,
	},
	{
		title: __( 'Real-Time National Weather Alerts', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Show UV Index', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __(
			'Air Quality (AQI) Line and Bar Graph Chart',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
		hot: true,
	},
	{
		title: __(
			'4 Years of Air Quality (AQI) Historical Data',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
	},
	{
		title: __( 'Air Quality (AQI) Forecast Data', 'location-weather' ),
		free: 'no',
		pro: 'yes',
		new: true,
	},
	{
		title: __(
			'Air Quality (AQI) Forecast Style Presets',
			'location-weather'
		),
		info: __(
			'Choose how your Air Quality Forecast appears with three preset styles: List for a simple vertical view, Graph for visual trend analysis, and Carousel for an interactive, swipe-friendly layout.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
	},
	{
		title: __( 'Detailed Weather Forecast', 'location-weather' ),
		info: __(
			'Show your visitors a rich, detailed weather forecast with all the essential insights they need. Ideal for planning ahead with confidence.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'AQI - Detailed Air Quality', 'location-weather' ),
		info: __(
			'Get a complete breakdown of air quality with real-time AQI levels and pollutant details. This block helps users understand environmental conditions at a glance.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
	},
	{
		title: __( 'Weather Accordion', 'location-weather' ),
		info: __(
			'Display weather information in a compact, collapsible accordion layout for easy navigation. Perfect for keeping your layout clean while offering rich information.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Weather Map by OpenWeatherMap', 'location-weather' ),
		info: __(
			'Get real-time weather updates for any location with the Weather Map by OpenWeather. Easily visualize temperature, precipitation, and other weather conditions on an interactive map.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
	},
	{
		title: __( 'Historical Weather Data', 'location-weather' ),
		info: __(
			'View past weather records with accurate historical temperature, precipitation, and condition data. Ideal for analyzing trends or reviewing previous climate patterns.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
		hot: true,
	},
	{
		title: __( 'Historical Air Quality Data', 'location-weather' ),
		info: __(
			'Access past air quality information for any location with Historical Air Quality Data. Track pollutants and trends over time to understand environmental changes.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
		hot: true,
	},
	{
		title: __(
			'Sun & Moon Times - Full Astronomy Data',
			'location-weather'
		),
		info: __(
			'Get accurate sunrise, sunset, moonrise, and moonset times for any location with Sun & Moon Times. Plan your day or night activities with precise celestial information.',
			'location-weather'
		),
		free: 'no',
		pro: 'yes',
		new: true,
		hot: true,
	},
	{
		title: __(
			'2 Weather API Integration (OpenWeather + WeatherAPI)',
			'location-weather'
		),
		free: 'yes',
		pro: 'yes',
	},
	{
		title: __( 'Multisite Compatible', 'location-weather' ),
		free: 'yes',
		pro: 'yes',
	},
	{
		title: __( 'Priority Top-notch Support', 'location-weather' ),
		free: 'no',
		pro: 'yes',
	},
];
const testimonials = [
	{
		text: __(
			'The free trial worked great upon testing, but needed the advanced features and upgraded. At first the advanced features (i.e. auto location weather and multiple day forecast) did not work as advertised....',
			'location-weather'
		),
		name: 'Dawie Hanekom',
		role: 'Managing Director, Newbe Marketing',
		img: '/assets/images/Dawie-Hanekom-min.png',
	},
	{
		text: __(
			'Awesome guys and Awesome plugin for getting different city weather updates easily. The plugin works great and is a simple weather app that does exactly what it is suppo....',
			'location-weather'
		),
		name: 'Jeffrey DiFilippo',
		role: 'Web Developer',
		img: '/assets/images/Jeffrey-DiFilippo-min.jpeg',
	},
	{
		text: __(
			'A clean and attractive widget that works without any problems. Amazingly helpful customer support who gave me the custom CSS code that I needed without hesitation, 5..',
			'location-weather'
		),
		name: 'Swan',
		role: 'Freelancer, Upwork',
		img: '/assets/images/swan.svg',
	},
];

const generateFreeOrProContent = ( content ) => {
	if ( typeof content === 'number' ) {
		return <b>{ content }</b>;
	} else {
		if ( content === 'yes' ) {
			return <i className="dashicons dashicons-saved"></i>;
		} else if ( content === 'no' ) {
			return <i className="dashicons dashicons-no-alt"></i>;
		} else {
			return content;
		}
	}
};

const LiteVsPro = () => {
	return (
		<section className="splw-lite-pro-page" id="lite-pro-tab">
			<div className="splw-lite-pro-table">
				<div className="splw-lite-pro-header">
					<div>
						<h2 className="splw-section-title">
							{ __(
								'Lite vs Pro Comparison',
								'location-weather'
							) }
						</h2>
						<span className="splw-lite-pro-subtitle">
							{ __(
								'Get Location Weather Pro Today and Unlock all the Powerful Features',
								'location-weather'
							) }
						</span>
					</div>
					<a
						target="_blank"
						href="https://locationweather.io/pricing/?ref=1"
						className="splw-upgrade-to-pro-btn"
					>
						<ProIconFill />
						{ __( 'Upgrade to Pro Now!', 'location-weather' ) }
					</a>
				</div>
				<div className="splw-lite-pro-table-list">
					<ul>
						<li className="splw-lite-pro-table-row splw-header">
							<span className="splw-title">
								{ __( 'FEATURES', 'location-weather' ) }
							</span>
							<span className="splw-free">
								{ __( 'LITE', 'location-weather' ) }
							</span>
							<span className="splw-pro splw-pro-icon">
								{ __( 'PRO', 'location-weather' ) }
							</span>
						</li>
						{ features.map( ( item, index ) => (
							<li
								className="splw-lite-pro-table-row"
								key={ index }
							>
								<span className="splw-title">
									{ item?.title }
									{ item?.info && (
										<InfoText text={ item?.info } />
									) }
									{ item?.video && (
										<span className="splw-settings-info">
											<VideoTooltipIcon color="#757575" />
											<span className="splw-settings-info-text">
												<video
													src={ item?.video }
													autoPlay
													loop
													muted
												/>
											</span>
										</span>
									) }
									{ item?.new && (
										<span className="splw-new">
											{ __( 'new', 'location-weather' ) }
										</span>
									) }
									{ item?.hot && (
										<span className="splw-hot">
											{ __( 'hot', 'location-weather' ) }
										</span>
									) }
								</span>
								<span className="splw-free">
									{ generateFreeOrProContent( item?.free ) }
								</span>
								<span className="splw-pro">
									{ generateFreeOrProContent( item?.pro ) }
								</span>
							</li>
						) ) }
					</ul>
				</div>
			</div>
			<div className="splw-upgrade-to-pro-promotion">
				<h2 className="splw-section-title">
					{ __(
						'Upgrade To PRO & Enjoy Advanced Features!',
						'location-weather'
					) }
				</h2>
				<span className="splw-section-subtitle">
					{ __( 'Already, ', 'location-weather' ) }
					<b>{ __( '16000+', 'location-weather' ) }</b>
					{ __(
						' people are using Location Weather on their websites to create beautiful weather showcase, why won’t you!',
						'location-weather'
					) }
				</span>
				<div className="splw-upgrade-to-pro-btn-wrapper">
					<a
						target="_blank"
						href="https://locationweather.io/pricing/?ref=1"
						className="splw-upgrade-to-pro-btn"
					>
						{ __( 'Upgrade to Pro Now!', 'location-weather' ) }
					</a>
					<a
						target="_blank"
						href="https://locationweather.io/"
						className="splw-upgrade-to-pro-btn"
					>
						{ __( 'See All Features', 'location-weather' ) }
					</a>
					<a
						target="_blank"
						className="splw-upgrade-to-pro-btn"
						href="https://locationweather.io/demos/vertical-card/"
					>
						{ __( 'Pro Live Demo', 'location-weather' ) }
					</a>
				</div>
			</div>
			<div className="splw-testimonial">
				<div className="splw-testimonial-title-section">
					<span className="splw-testimonial-subtitle">
						{ __(
							'NO NEED TO TAKE OUR WORD FOR IT',
							'location-weather'
						) }
					</span>
					<h2 className="splw-section-title">
						{ __(
							'Our Users Love Location Weather Pro!',
							'location-weather'
						) }
					</h2>
				</div>
				<div className="splw-testimonial-wrap">
					{ testimonials?.map( ( item, index ) => (
						<div className="splw-testimonial-area" key={ index }>
							<div className="splw-testimonial-content">
								<p>{ item?.text }</p>
							</div>

							<div className="splw-testimonial-info">
								<div className="splw-img">
									<img
										src={ `${ splw_admin_settings_localize?.pluginUrl }${ item?.img }` }
										alt={ item?.name }
									/>
								</div>

								<div className="splw-info">
									<h3>{ item.name }</h3>
									<p>{ item.role }</p>
									<div className="splw-star">
										<i>★★★★★</i>
									</div>
								</div>
							</div>
						</div>
					) ) }
				</div>
			</div>
		</section>
	);
};

export default LiteVsPro;
