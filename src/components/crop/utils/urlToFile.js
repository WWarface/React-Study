export async function urlToFile(url) {
	const response = await fetch(url)
	const data = await response.blob()
	const metadata = { type: data.type }
	const filename = url.split('/').pop()
	return new File([data], filename, metadata)
}
