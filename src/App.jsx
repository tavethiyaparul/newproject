import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Login from './pages/Login'

function App() {
    return (
        <Router>
            <Routes>
                {/* Set / route to Dashboard and redirect other paths to Register */}
                <Route path="/" element={<Login/>} />
                <Route path="/dashboard" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="company" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>    )
}

export default App
