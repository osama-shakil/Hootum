import React from 'react';
import SectionHeader from '../common/SectionHeader';
import FeaturedCard from '../common/cards/FeaturedCard';
const featuredCardsData = [
	{
		id: 'artwork',
		title: 'Artwork',
		description:
			'Original artworks created using mediums like oil, acrylic, watercolor, and more.',
		image: '/featured-collection/artwork.png',
	},
	{
		id: 'antique',
		title: 'Antique',
		description:
			'A well-known global marketplace where you can find a variety of antiques, including art pieces.',
		image: '/featured-collection/antique.png',
	},
	{
		id: 'watches',
		title: 'Watches',
		description:
			'Discover the precision with luxury watch, a true masterpiece for the discerning collector.',
		image: '/featured-collection/watches.png',
	},
];
const featuredCardsData2 = [
	{
		id: 'sculptures',
		title: 'Sculptures',
		description:
			'Three-dimensional art pieces crafted from materials such as stone, metal, clay, or wood.',
		image: '/featured-collection/sculptures.png',
	},
	{
		id: 'cards',
		title: 'Cards',
		description:
			'Elevate Your Collection with card NFTs! - Unique Digital Cards for True Collectors',
		image: '/featured-collection/cards.png',
	},
	{
		id: 'fashion',
		title: 'Fashion',
		description:
			'Step into the world of timeless elegance with our "Elegant Opulence" collection.',
		image: '/featured-collection/fashion.png',
	},
	{
		id: 'musics',
		title: 'Musics',
		description:
			'A journey through ambient, crafted to elevate your auditory experience to celestial heights.',
		image: '/featured-collection/musics.png',
	},
];
const FeaturedSection = () => {
	return (
		<div>
			<SectionHeader title='FEATURED COLLECTION' btnText='Explore more' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:container my-16'>
				{featuredCardsData.map(cardData => (
					<FeaturedCard key={cardData.id} {...cardData} />
				))}
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:container my-16'>
				{featuredCardsData2.map(cardData => (
					<FeaturedCard key={cardData.id} {...cardData} />
				))}
			</div>
		</div>
	);
};

export default FeaturedSection;
