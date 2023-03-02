import { subscribe, unsubscribe, unsubscribePromotions } from '../../actions/newsletter';

export async function load({ url }) {
	const unsubToken = url.search.split('unsubscribe?')[1];
	const unsubPromotion = url.search.split('unsubscribe/promotions?')[1];
	if (unsubToken) {
		await unsubscribe(unsubToken);
	}
	if (unsubPromotion) {
		await unsubscribePromotions(unsubPromotion);
	}
	return {
		unsubscribe: unsubToken && true,
		unsubscribePromotions: unsubPromotion && true
	};
}

export const actions = {
	subscribe
};
