import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useFormContext } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

type MoreProps = {
	validate?: {
		maxLength?: number;
		minLength?: number;
		required?: boolean;
		pattern?: RegExp;
	};
	label?: string;
};

const Input = ({ className, validate, ...props }: InputProps & MoreProps) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const renderError = (): {
		isValid: boolean;
		error: React.ReactNode;
	} => {
		const name = props.name ?? undefined;
		const label = props.label ?? undefined;
		if (!name) return { isValid: true, error: '' };
		const type = errors[name]?.type;
		const validated = validate ?? {};
		switch (type) {
			case 'required':
				return {
					isValid: false,
					error: (
						<span className="text-[12px] text-title-red">{`${label ?? name} is required.`}</span>
					),
				};
			case 'minLength':
				return {
					isValid: false,
					error: (
						<span className="text-[12px] text-title-red">{`${label ?? name} is not less than ${
							validated.minLength
						} character.`}</span>
					),
				};
			case 'maxLength':
				return {
					error: (
						<span className="text-[12px] text-title-red">{`${label ?? name} is not greater than ${
							validated.maxLength
						} character.`}</span>
					),
					isValid: false,
				};
			case 'pattern':
				return {
					error: (
						<span className="text-[12px] text-title-red">{`${label ?? name} is invalid.`}</span>
					),
					isValid: false,
				};
			default:
				return {
					isValid: true,
					error: null,
				};
		}
	};

	const registerReactHookForm = () => {
		const name = props.name ?? undefined;
		const validated = validate ?? {};
		if (!name || !validated) return {};

		return { ...register(name, validated) };
	};

	return (
		<div className="flex flex-col">
			<input
				className={twMerge(
					'bg-main-background text-base-content focus:ring-primary-focus w-full min-w-0 appearance-none rounded-md border border-main-border px-4 py-2 text-base placeholder-placeholder placeholder:text-[14px] focus:border-primary focus:outline-none',
					className,
					!renderError().isValid && 'border-title-red focus:border-title-red'
				)}
				{...props}
				{...registerReactHookForm()}
			/>
			{!renderError().isValid && renderError().error}
		</div>
	);
};

export default Input;
