import useItems from '../../../hooks/useItems'
import Item from './Item/Item'

const Inventory = () => {
	const [items] = useItems()

	return (
		<div>
			<h1 className='text-xl text-yellow-500 text-center my-9'>
				Inventory Items
			</h1>
			<div className='grid gap-4 grid-cols-3'>
				{items.slice(0, 6).map(item => (
					<Item key={item._id} item={item}></Item>
				))}
			</div>
		</div>
	)
}

export default Inventory
