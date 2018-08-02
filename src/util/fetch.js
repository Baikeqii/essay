
let fetchData = (url, opts, callback) => {
	fetch(url, {
		headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
		},
		method: 'post',
		body: JSON.stringify(opts)
	})
		.then(response => response.json())
		.then(res => {
			callback(res);
		})
}
export default fetchData;
