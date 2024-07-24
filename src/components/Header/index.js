// Write your JS code here
import './index.css'

const Header = () => {
  const onClickLogout = props => {
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav-logo"
      />
      <ul className="nav-ul">
        <li className="nav-li">
          <button type="button" className="normal-btn">
            Home
          </button>
        </li>
        <li className="nav-li">
          <button type="button" className="normal-btn">
            Products
          </button>
        </li>
        <li className="nav-li">
          <button type="button" className="normal-btn">
            Cart
          </button>
        </li>

        <button onClick={onClickLogout} className="blue-bg-btn" type="button">
          Logout
        </button>
      </ul>
    </nav>
  )
}
export default Header
