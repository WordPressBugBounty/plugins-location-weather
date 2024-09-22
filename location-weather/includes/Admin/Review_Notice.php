<?php
/**
 * The admin review notice.
 *
 * @package    Location Weather.
 * @subpackage Location Weather/admin/views/notices
 * @author     ShapedPlugin<support@shapedplugin.com>
 */

namespace ShapedPlugin\Weather\Admin;

/**
 * The admin review notice.
 */
class Review_Notice {

	/**
	 * Initialize the class and set its properties.
	 */
	public function __construct() {
		add_action( 'admin_notices', array( $this, 'display_admin_notice' ) );
		add_action( 'wp_ajax_location-weather-never-show-review-notice', array( $this, 'dismiss_review_notice' ) );
	}

	/**
	 * Display admin notice.
	 *
	 * @return void
	 */
	public function display_admin_notice() {

		// Show only to Admins.
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// Variable default value.
		$review = get_option( 'location_weather_review_notice_dismiss' );
		$time   = time();
		$load   = false;

		if ( ! $review ) {
			$review = array(
				'time'      => $time,
				'dismissed' => false,
			);
			add_option( 'location_weather_review_notice_dismiss', $review );
		} else {
			// Check if it has been dismissed or not.
			if ( ( isset( $review['dismissed'] ) && ! $review['dismissed'] ) && ( isset( $review['time'] ) && ( ( $review['time'] + ( DAY_IN_SECONDS * 3 ) ) <= $time ) ) ) {
				$load = true;
			}
		}

		// If we cannot load, return early.
		if ( ! $load ) {
			return;
		}
		?>
		<div id="location-weather-review-notice" class="location-weather-review-notice">
			<div class="splw-plugin-icon">
				<img src="https://ps.w.org/location-weather/assets/icon-256x256.gif" alt="Location Weather">
			</div>
			<div class="splw-notice-text">
				<h3>Enjoying <strong>Location Weather</strong>?</h3>
				<p>We hope you had a wonderful experience using <strong>Location Weather</strong>. Please take a moment to leave a review on <a href="https://wordpress.org/support/plugin/location-weather/reviews/?filter=5#new-post" target="_blank"><strong>WordPress.org</strong></a>.
				Your positive review will help us improve. Thank you! 😊</p>

				<p class="splw-review-actions">
					<a href="https://wordpress.org/support/plugin/location-weather/reviews/?filter=5#new-post" target="_blank" class="button button-primary notice-dismissed rate-location-weather">Ok, you deserve ★★★★★</a>
					<a href="#" class="notice-dismissed remind-me-later"><span class="dashicons dashicons-clock"></span>Nope, maybe later
					</a>
					<a href="#" class="notice-dismissed never-show-again"><span class="dashicons dashicons-dismiss"></span>Never show again</a>
				</p>
			</div>
		</div>

		<script type='text/javascript'>

			jQuery(document).ready( function($) {
				$(document).on('click', '#location-weather-review-notice.location-weather-review-notice .notice-dismissed', function( event ) {
					if ( $(this).hasClass('rate-location-weather') ) {
						var notice_dismissed_value = "1";
					}
					if ( $(this).hasClass('remind-me-later') ) {
						var notice_dismissed_value =  "2";
						event.preventDefault();
					}
					if ( $(this).hasClass('never-show-again') ) {
						var notice_dismissed_value =  "3";
						event.preventDefault();
					}

					$.post( ajaxurl, {
						action: 'location-weather-never-show-review-notice',
						notice_dismissed_data : notice_dismissed_value,
						nonce: '<?php echo esc_attr( wp_create_nonce( 'splw_review_notice' ) ); ?>'
					});

					$('#location-weather-review-notice.location-weather-review-notice').hide();
				});
			});

		</script>
		<?php
	}

	/**
	 * Dismiss review notice
	 *
	 * @since  2.2.3
	 *
	 * @return void
	 **/
	public function dismiss_review_notice() {
		$post_data = wp_unslash( $_POST );

		if ( ! isset( $post_data['nonce'] ) || ! wp_verify_nonce( sanitize_key( $post_data['nonce'] ), 'splw_review_notice' ) ) {
			return;
		}

		$review = get_option( 'location_weather_review_notice_dismiss' );

		if ( ! $review ) {
			$review = array();
		}
		switch ( isset( $post_data['notice_dismissed_data'] ) ? $post_data['notice_dismissed_data'] : '' ) {
			case '1':
				$review['time']      = time();
				$review['dismissed'] = true;
				break;
			case '2':
				$review['time']      = time();
				$review['dismissed'] = false;
				break;
			case '3':
				$review['time']      = time();
				$review['dismissed'] = true;
				break;
		}
		update_option( 'location_weather_review_notice_dismiss', $review );
		die;
	}
}
