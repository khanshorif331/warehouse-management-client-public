import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'
import NotFound from './components/Shared/NotFound/NotFound'

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/inventory/:id'></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App
