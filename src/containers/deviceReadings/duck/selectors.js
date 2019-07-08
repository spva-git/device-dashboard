export const getItems = ({ deviceReadings: { items } }) => {
	if(items.data) {
		items.activeCount = items.data.filter(element => element.active === true).length
		items.inactiveCount = items.data.filter(element => element.active === false).length
	}
  	return items;
};

export default {
  getItems
};
