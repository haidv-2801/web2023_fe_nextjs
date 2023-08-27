const PUBLIC_URL: string = process.env.NEXT_PUBLIC_URL || '';
const REVALIDATE: number = (process.env.NEXT_PUBLIC_REVALIDATE || 0) as number;

export { PUBLIC_URL, REVALIDATE };
