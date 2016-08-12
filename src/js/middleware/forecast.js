const MiddleWare = (store) => (next) => (action) => {
	console.log(action);
}

export default MiddleWare;