import { Arrow, DocIcon, SupportIcon, TeamIcon } from '../../icons';
import { __ } from '@wordpress/i18n';

const QuickStart = () => {
	return (
		<div className="splwb-settings-getting-start-page">
			<div className="splwb-settings-getting-start-page-content">
				<div className="splwb-video-section">
					<div className="splwb-video-section-text">
						<h3>
							{ __(
								'Welcome to Location Weather!',
								'location-weather'
							) }
						</h3>
						<span>
							{ __(
								'Thank you for installing Location Weather! This video will help you get started with the plugin. Enjoy!',
								'location-weather'
							) }
						</span>
					</div>
					<div className="splwb-video-section-video">
						<iframe
							width="724"
							height="405"
							src="https://www.youtube.com/embed/videoseries?list=PLoUb-7uG-5jP_5pNrdBCKxgPrCp_rS89G"
							title="YouTube video player"
						></iframe>
					</div>
					<div className="splwb-video-section-btn">
						<ul>
							<li>
								<a
									href={ `${ splw_admin_settings_localize?.homeUrl }wp-admin/post-new.php?post_type=page&splwblock_inserter` }
									target="_blank"
								>
									{ ' ' }
									{ __(
										'Explore the Blocks',
										'location-weather'
									) }
								</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://locationweather.io/"
								>
									{ __(
										'See Full Features ',
										'location-weather'
									) }{ ' ' }
									<Arrow />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="splwb-sidebar-section">
					<div className="splwb-sidebar-info-card">
						<div className="splwb-sidebar-info-card-title">
							<span>
								<DocIcon />
							</span>
							<h4>
								{ __( 'Documentation', 'location-weather' ) }
							</h4>
						</div>
						<p className="splwb-sidebar-info-card-text">
							{ __(
								'Explore Location Weather plugin capabilities in our enriched documentation.',
								'location-weather'
							) }
						</p>
						<a
							target="_blank"
							href="https://locationweather.io/docs/"
							className="splwb-sidebar-info-card-btn"
						>
							{ __( 'Browse Now', 'location-weather' ) }
						</a>
					</div>
					<div className="splwb-sidebar-info-card">
						<div className="splwb-sidebar-info-card-title">
							<span>
								<SupportIcon />
							</span>
							<h4>
								{ __(
									'Technical Support',
									'location-weather'
								) }
							</h4>
						</div>
						<p className="splwb-sidebar-info-card-text">
							{ __(
								'For personalized assistance, reach out to our skilled support team for prompt help.',
								'location-weather'
							) }
						</p>
						<a
							target="_blank"
							href="https://shapedplugin.com/create-new-ticket/"
							className="splwb-sidebar-info-card-btn"
						>
							{ __( 'Ask Now', 'location-weather' ) }
						</a>
					</div>
					<div className="splwb-sidebar-info-card">
						<div className="splwb-sidebar-info-card-title">
							<span>
								<TeamIcon />
							</span>
							<h4>
								{ __(
									'Join The Community',
									'location-weather'
								) }
							</h4>
						</div>
						<p className="splwb-sidebar-info-card-text">
							{ __(
								'Join the official ShapedPlugin community to share your experiences, thoughts, and ideas.',
								'location-weather'
							) }
						</p>
						<a
							target="_blank"
							href="https://community.shapedplugin.com/portal/space/locationweather/home"
							className="splwb-sidebar-info-card-btn"
						>
							{ __( 'Join Now', 'location-weather' ) }
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuickStart;
