import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GoServices from './Components/GoServices'
import NavBar from './Components/NavBar'

function App() {

    return (

		<>

			<BrowserRouter>

				<NavBar />
			
				<Routes>

					<Route index path='/' element={<GoServices />}/>

				</Routes>

			</BrowserRouter>
      
      	</>
    
	)

}

export default App
