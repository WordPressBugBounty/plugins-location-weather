import axios from 'axios';
import { useState, useEffect } from '@wordpress/element';

// Use this hook for enable and disabling blocks from the blocks admin page.
const useBlockOptions = ( blocksSettings ) => {
	const [ options, setOptions ] = useState( [] );
	const data = new FormData();

	data.append( 'nonce', splw_admin_settings_localize.nonce );
	data.append( 'action', 'splw_update_block_options' );
	data.append( 'optionData', JSON.stringify( blocksSettings ) );

	const fetchApi = async ( data ) => {
		try {
			const response = await axios.post( ajaxurl, data );
			const { options } = response.data;
			setOptions( options );
		} catch ( error ) {
			console.error( 'Error fetching options:', error.message );
		}
	};

	useEffect( () => {
		fetchApi( data );
	}, [ blocksSettings ] );

	return options;
};

export default useBlockOptions;
