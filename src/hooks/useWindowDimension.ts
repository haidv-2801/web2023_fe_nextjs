'use client';
import { useState, useEffect } from 'react';

export function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window || {};
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setWindowDimensions(getWindowDimensions());

		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window && window.addEventListener('resize', handleResize);
		return () => window && window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
