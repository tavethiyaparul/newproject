import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/superadmin/Dashboard'
import Products from './pages/Products'
import Login from './pages/Login'
import Company from './pages/superadmin/Company'
import Maneger from './pages/superadmin/Maneger'
import Employee from './pages/superadmin/Employee'

function App() {
    return (
        <Router>
            <Routes>
                {/* Set / route to Dashboard and redirect other paths to Register */}
                <Route path="/" element={<Login/>} />
                <Route path="/superadmin" element={<Layout />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="company" element={<Company />} />
                    <Route path="manager" element={<Maneger />} />
                    <Route path="employee" element={<Employee />} />
                </Route>
                <Route path="/admin" element={<Layout />}>
                    <Route  element={<Dashboard />} />
                    <Route path="company" element={<Products />} />
                </Route>
                <Route path="/employee" element={<Layout />}>
                    <Route  element={<Dashboard />} />
                    <Route path="company" element={<Products />} />
                </Route>
                <Route path="/manager" element={<Layout />}>
                    <Route  element={<Dashboard />} />
                    <Route path="company" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>    )
}

export default App
