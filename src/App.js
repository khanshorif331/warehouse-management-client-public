import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import NotFound from './components/Shared/NotFound/NotFound'
import ItemDetail from './components/Pages/ItemDetail/ItemDetail'
import ManageInventories from './components/Pages/ManageInventories/ManageInventories'
import Blogs from './components/Pages/Blogs/Blogs'
import AddNewItem from './components/Pages/AddNewItem/AddNewItem'
import Login from './components/Pages/Login/Login'
import Register from './components/Pages/Register/Register'
import RequireAuth from './components/RequireAuth/RequireAuth'

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route
					path='/itemDetail/:id'
					element={
						<RequireAuth>
							<ItemDetail></ItemDetail>
						</RequireAuth>
					}
				></Route>
				<Route
					path='/manageInventories'
					element={
						<RequireAuth>
							<ManageInventories></ManageInventories>
						</RequireAuth>
					}
				></Route>
				<Route path='/addItem' element={<AddNewItem></AddNewItem>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/blogs' element={<Blogs></Blogs>}></Route>
				<Route path='/register' element={<Register></Register>}></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App
