import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import dayjs from './dateTime';

export function syncWriteFile(filename: string, data: any, override: boolean = false) {
	/**
	 * flags:
	 *  - w = Open file for reading and writing. File is created if not exists
	 *  - a+ = Open file for reading and appending. The file is created if not exists
	 */
	const path = join(__dirname, filename);
	let flag: string = override ? 'w' : 'a+';

	writeFileSync(path, `\n----------------------------------------------------`, {
		flag,
	});
	writeFileSync(path, `\nDEBUG|'${dayjs(Date.now()).format('DD/MM/YYYY h:mm:ss A')}'\n`, {
		flag,
	});

	if (!override) {
		writeFileSync(path, data, {
			flag,
		});
	}

	const contents = readFileSync(path, 'utf-8');

	return contents;
}

export async function LogDebug(data: any, section: string = '', override: boolean = false) {
	syncWriteFile(
		`./logs_${dayjs(Date.now()).format('DD_MM_YYYY')}_${section}.txt`,
		JSON.stringify(data),
		override
	);
}
