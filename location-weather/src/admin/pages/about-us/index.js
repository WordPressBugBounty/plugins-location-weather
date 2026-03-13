import { Arrow } from '../../icons';
import { __ } from '@wordpress/i18n';

const AboutUs = () => {
	return (
		<section id="about-us-tab" className="splw-about-page">
			<div className="splw-about-box">
				<div className="splw-about-info">
					<h3>
						{ __(
							'The Most Powerful Weather & AQI Plugin for WordPress from the Location Weather Team',
							'location-weather'
						) }
					</h3>
					<p>
						{ __(
							'In early 2016, while building a WordPress news site for our partner company, we needed a simple, reliable way to display live weather updates and forecasts.',
							'location-weather'
						) }{ ' ' }
						{ __(
							"After searching extensively, we couldn't find any plugin that met our standards for accuracy, design, and ease of use.",
							'location-weather'
						) }{ ' ' }
						{ __(
							'So we set out with a clear mission: create a powerful yet user-friendly WordPress weather solution.',
							'location-weather'
						) }{ ' ' }
						{ __(
							'That mission became Location Weather—built to help anyone display beautiful, accurate',
							'location-weather'
						) }{ ' ' }
						<b>
							{ __(
								'Weather Forecasts, AQI, and Astronomy Data',
								'location-weather'
							) }
						</b>{ ' ' }
						{ __(
							"easily on their WordPress sites. We're confident you'll love the experience!",
							'location-weather'
						) }
					</p>
					<div className="splwb-video-section-btn">
						<ul>
							<li>
								<a
									target="_blank"
									href="https://locationweather.io/"
									className="splw-medium-btn"
								>
									{ __(
										'Explore Location Weather',
										'location-weather'
									) }
								</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://shapedplugin.com/about-us/"
									className="splw-medium-btn splw-arrow-btn"
								>
									{ __(
										'More About Us ',
										'location-weather'
									) }{ ' ' }
									<Arrow />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="splw-about-img">
					<img
						src={ `${ splw_admin_settings_localize?.pluginUrl }/assets/images/lw_team.webp` }
						alt="Team"
						height="402"
						width="610"
					/>
					<span>
						{ __(
							'The Creative Minds Behind the Location Weather Plugin',
							'location-weather'
						) }
					</span>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
