import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID AJcUzxTZXQXTHnio_C-rkU4dJ0xrgZGccn7oxkqVmdw'
	}
});