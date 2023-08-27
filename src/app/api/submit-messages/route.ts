import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const res = await fetch('http://0.0.0.0:1337/api/messages', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization:
				'Bearer ' +
				'58f1c8ff7c4dc7b70e4cfd1ad40686433c67f20ef6fdcae55af9fba004343f0b3bdc2a13405b2680d40ac3532a85f7f2ac99a331f1c139fde063d0adbdbcf0f16e3c732ef5cbd93bda5be8b1d30a79f1cbfecf3d42cc1102d31e2e0c53b1b8ae508777df74fb8d5eabfad2476f2154ef5dbec3cba472b17b6271ec7620e7dd67',
		},
		body: JSON.stringify({
			data: {
				name: 'test5',
				email: 'test11_haido28012@gmail.com',
				phone_number: '0388039267',
				message: 'test2',
			},
		}),
	});

	const data = await res.json();
	return NextResponse.json(data);
}
