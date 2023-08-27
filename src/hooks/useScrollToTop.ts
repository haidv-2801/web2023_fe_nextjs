'use client';
import { useEffect } from 'react';

export default function useScrollToTop() {
	useEffect(() => {
		const mybutton: HTMLElement | null = document.getElementById('btn-back-to-top');
		addEventListener(mybutton);
		window.addEventListener('scroll', () => scrollFunction(mybutton));

		return () => {
			window.removeEventListener('scroll', () => scrollFunction(mybutton));
		};
	}, []);

	function scrollFunction(mybutton: HTMLElement | null) {
		if (!mybutton) return;
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			mybutton.classList.remove('hidden');
		} else {
			mybutton.classList.add('hidden');
		}
	}

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const addEventListener = (mybutton: HTMLElement | null) => {
		if (mybutton) mybutton.addEventListener('click', backToTop);
	};

	return {};
}
