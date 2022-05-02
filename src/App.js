import logo from './logo.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Header from './components/Shared/Header/Header'
import Footer from './components/Shared/Footer/Footer'

function App() {
	return (
		<div className='App'>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
			</Routes>
			<Footer></Footer>
			{/* <h1>Hello World</h1> */}
		</div>
	)
}

export default App
