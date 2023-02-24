import { subscribe, unsubscribe, unsubscribePromotions } from '../../actions/newsletter';

export async function load({ cookies, url }) {
	console.log(url);
	const unsubToken = url.search.split('unsubscribe?')[1];
	const unsubPromotion = url.search.split('unsubscribe/promotions?')[1];
	if (unsubToken) {
		await unsubscribe(unsubToken);
	}
	if (unsubPromotion) {
		await unsubscribePromotions(unsubPromotion);
	}
	cookies.delete('hideNewsletterSignUp');
	return {
		unsubscribe: unsubToken && true,
		unsubscribePromotions: unsubPromotion && true,
		hideNewsletterSignUp: false
	};
}

export const actions = {
	subscribe
};
