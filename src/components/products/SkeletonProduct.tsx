import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonProduct = () => (
	<ContentLoader
		speed={2}
		width={210}
		height={370}
		viewBox="0 0 210 300"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="6" ry="6" width="208" height="210" />
		<rect x="0" y="220" rx="6" ry="6" width="100" height="20" />
		<rect x="0" y="250" rx="6" ry="6" width="54" height="17" />
		<rect x="0" y="280" rx="6" ry="6" width="54" height="17" />
		<rect x="120" y="260" rx="12" ry="12" width="90" height="38" />
	</ContentLoader>
);

export default SkeletonProduct;
