import axios from 'axios';
import envConfig from './env.config';
import { getAllRequiredHeaders } from './utilities';

const { apiEndPoint } = envConfig;

const client = axios.create({
	baseURL: apiEndPoint(),
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	// transformRequest: [
	// 	function (data) {
	// 		// Do whatever you want to transform the data
	// 		console.log('transformRequest', data);
	// 		return data;
	// 	},
	// ],

	// `transformResponse` allows changes to the response data to be made before
	// it is passed to then/catch
	// transformResponse: [
	// 	function (data) {
	// 		// Do whatever you want to transform the data
	// 		console.log('transformResponse', data);
	// 		return data;
	// 	},
	// ],
});

// client.interceptors.response.use((response) => {
// 	return response;
// }, (error) => {
// 	return Promise.resolve({ error });
// });

export const getRequest = async (url) => {
	try {
		const res = await client.get(`${url}`, {
			headers: { ...getAllRequiredHeaders() }
		});
		const { data, status } = res;
		if (status === 204) {
			return { response: { success: false, message: 'Something Went Wrong!', data: [] }, error: true };
		}
		return { response: data, error: false };
	} catch (error) {
		return { response: { isLogout: true }, error: true };
	}
};

export const postRequest = async (url, payload = {}) => {
	try {
		const res = await client.post(`${url}`, payload, {
			headers: { ...getAllRequiredHeaders() }
		});
		const { data, status } = res;
		if (status === 204) {
			return { response: { success: false, message: 'Something Went Wrong!', data: [] }, error: true };
		}
		return { response: data, error: false };
	} catch (error) {
		return { response: { isLogout: true }, error: true };
	}
};

export const putRequest = async (url, payload = {}) => {
	try {
		const res = await client.put(`${url}`, payload, {
			headers: { ...getAllRequiredHeaders() }
		});
		const { data, status } = res;
		if (status === 204) {
			return { response: { success: false, message: 'Something Went Wrong!', data: [] }, error: true };
		}
		return { response: data, error: false };
	} catch (error) {
		return { response: { isLogout: true }, error: true };
	}
};

export const patchRequest = async (url, payload = {}) => {
	try {
		const res = await client.patch(`${url}`, payload, {
			headers: { ...getAllRequiredHeaders() }
		});
		const { data, status } = res;
		if (status === 204) {
			return { response: { success: false, message: 'Something Went Wrong!', data: [] }, error: true };
		}
		return { response: data, error: false };
	} catch (error) {
		return { response: { isLogout: true }, error: true };
	}
};

export const deleteRequest = async (url) => {
	try {
		const res = await client.delete(`${url}`, {
			headers: { ...getAllRequiredHeaders() }
		});
		const { data, status } = res;
		if (status === 204) {
			return { response: { success: false, message: 'Something Went Wrong!', data: [] }, error: true };
		}
		return { response: data, error: false };
	} catch (error) {
		return { response: { isLogout: true }, error: true };
	}
};
