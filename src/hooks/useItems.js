import { useEffect, useState } from 'react'

const useItems = () => {
	const [items, setItems] = useState([])

	useEffect(() => {
		fetch(
			'https://warehouse-management-server-public.onrender.com/items?limit=5'
		)
			.then(res => res.json())
			.then(data => setItems(data))
	}, [])

	return [items, setItems]
}

export default useItems
