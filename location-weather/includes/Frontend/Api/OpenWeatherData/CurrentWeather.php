<?php
/**
 * CurrentWeather class file.
 * This class is used to hold the current weather data from OpenWeatherMap.
 *
 * @package Location_Weather
 */

namespace ShapedPlugin\Weather\Frontend\Api\OpenWeatherData;

use ShapedPlugin\Weather\Frontend\Api\Aid\City;
use ShapedPlugin\Weather\Frontend\Api\Aid\Sun;
use ShapedPlugin\Weather\Frontend\Api\Aid\Temperature;
use ShapedPlugin\Weather\Frontend\Api\Aid\Unit;
use ShapedPlugin\Weather\Frontend\Api\Aid\Weather;
use ShapedPlugin\Weather\Frontend\Api\Aid\Wind;

/**
 * Weather class used to hold the current weather data.
 */
class CurrentWeather {
	/**
	 * The city object.
	 *
	 * @var Aid\City
	 */
	public $city;

	/**
	 * The temperature object.
	 *
	 * @var Aid\Temperature
	 */
	public $temperature;

	/**
	 * Humidity.
	 *
	 * @var Aid\Humidity
	 */
	public $humidity;

	/**
	 * Gusts.
	 *
	 * @var Aid\gusts
	 */
	public $gusts;

	/**
	 *  Pressure.
	 *
	 * @var Aid\Pressure
	 */
	public $pressure;

	/**
	 * Wind.
	 *
	 * @var Aid\Wind
	 */
	public $wind;

	/**
	 * Cloud.
	 *
	 * @var Aid\Clouds
	 */
	public $clouds;

	/**
	 * Visibility.
	 *
	 * @var Aid\Visibility
	 */
	public $visibility;

	/**
	 * Sun.
	 *
	 * @var Aid\Sun
	 */
	public $sun;

	/**
	 * Weather.
	 *
	 * @var Aid\Weather
	 */
	public $weather;

	/**
	 *  Datetime.
	 *
	 * @var \DateTime
	 */
	public $last_update;

	/**
	 *  Timezone.
	 *
	 * @var \Timezone
	 */
	public $timezone;
	/**
	 * Create a new weather object.
	 *
	 * @param mixed  $data The place to get weather information for.
	 * @param string $units Can be either 'metric' or 'imperial' (default).
	 *
	 * @internal
	 */
	public function __construct( $data, $units ) {
		// This is kind of a hack, because the units are missing in the document.
		if ( 'metric' === $units ) {
			$wind_speed_unit = 'm/s';
		} else {
			$wind_speed_unit = 'mph';
		}

		$utctz = new \DateTimeZone( 'UTC' );

		if ( $data instanceof \SimpleXMLElement ) {
			$this->city        = new City( $data->city['id'], $data->city['name'], $data->city->coord['lat'], $data->city->coord['lon'], $data->city->country, null, $data->city->timezone );
			$this->temperature = new Temperature( new Unit( $data->temperature['value'], $data->temperature['unit'] ), new Unit( $data->temperature['min'], $data->temperature['unit'] ), new Unit( $data->temperature['max'], $data->temperature['unit'] ) );
			$this->humidity    = new Unit( $data->humidity['value'], $data->humidity['unit'] );

			$this->gusts       = new Unit( $data->wind->gusts['value'], $data->wind->speed['unit'] );
			$this->pressure    = new Unit( $data->pressure['value'], 'mb' );
			$this->wind        = new Wind( new Unit( $data->wind->speed['value'], $wind_speed_unit, $data->wind->speed['name'] ) );
			$this->visibility  = new Unit( ( $data->visibility['value'] * 0.001 ), 'km' );
			$this->clouds      = new Unit( $data->clouds['value'], null, $data->clouds['name'] );
			$this->sun         = new Sun( new \DateTime( $data->city->sun['rise'], $utctz ), new \DateTime( $data->city->sun['set'], $utctz ) );
			$this->weather     = new Weather( $data->weather['number'], $data->weather['value'], $data->weather['icon'] );
			$this->last_update = new \DateTime( $data->lastupdate['value'], $utctz );
			$this->timezone    = $data->city->timezone;
		}
	}
}
