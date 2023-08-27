import axios from 'axios';

let header = {
	'Access-Control-Allow-Origin': '*',
	'Content-type': 'application/json; charset=UTF-8',
	Accept: '*',
};

const authHeader = () => {
	let token =
		'58f1c8ff7c4dc7b70e4cfd1ad40686433c67f20ef6fdcae55af9fba004343f0b3bdc2a13405b2680d40ac3532a85f7f2ac99a331f1c139fde063d0adbdbcf0f16e3c732ef5cbd93bda5be8b1d30a79f1cbfecf3d42cc1102d31e2e0c53b1b8ae508777df74fb8d5eabfad2476f2154ef5dbec3cba472b17b6271ec7620e7dd67';
	return token
		? {
				Accept: '*',
				Authorization: 'Bearer ' + token,
		  }
		: {};
};

header = { ...header, ...authHeader() };

const axiosClient = axios.create({
	headers: {
		...header,
	},
	timeout: 60 * 1000, //timeout khi request chạm đến -> hủy bỏ request
});

axiosClient.interceptors.request.use(
	(config) => {
		//refresh accesstoken ở đây
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

axiosClient.interceptors.response.use(
	(res) => {
		if (res && res.data) {
			return res.data;
		}
		return res;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default axiosClient;
export { header };
