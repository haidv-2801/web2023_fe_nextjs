'use client';
import classNames from 'classnames';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useRef, useState } from 'react';
import Fallback from '../../../../public/assets/images/fallback.png';

export interface ImageProps extends NextImageProps {
	lazyBlur?: boolean;
}

const Image = (props: ImageProps) => {
	const { lazyBlur = true, ...rest } = props;
	const imageRef = useRef(null);
	const [imgSrc, setImgSrc] = useState<NextImageProps['src']>(rest.src || Fallback.src);
	const fill = rest.width || rest.height ? false : true;

	return (
		<div className="h-full max-w-full">
			<NextImage
				{...rest}
				ref={imageRef}
				className={classNames(rest.className, 'z-[2]')}
				fill={fill}
				src={imgSrc}
				loading={'lazy'}
				onError={() => {
					setImgSrc(Fallback.src);
				}}
				blurDataURL={Fallback.src}
				onLoadingComplete={(result) => {
					if (result.naturalWidth === 0) {
						// Broken image
						setImgSrc(Fallback.src);
					}
				}}
			/>
			{lazyBlur && (
				<NextImage
					{...rest}
					className={classNames('blur-sm', rest.className, 'z-[1]')}
					fill={fill}
					src={imgSrc}
					loading={'lazy'}
					onError={() => {
						setImgSrc(Fallback.src);
					}}
					blurDataURL={Fallback.src}
					quality={1}
					onLoadingComplete={(result) => {
						if (result.naturalWidth === 0) {
							// Broken image
							setImgSrc(Fallback.src);
						}
					}}
				/>
			)}
		</div>
	);
};

export default Image;
