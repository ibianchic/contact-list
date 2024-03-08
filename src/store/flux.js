const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
					task: "", 
					list: []
				}
		},
		actions: {
			handleOnChange: (event) => {
				setStore({
					task: event.target.value,
				}),
			}
			handleOnSubmit: (event) => {
				event.preventDefault(),
				const store  = getStore()
				if(store.task !== "" ) {
					list: store.list.concat(store.task)
				}
		}
	};
};

export default getState;
