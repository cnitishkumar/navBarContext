// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const logoLight =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const logoDark =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

      const btnIconLight =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const btnIconDark =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const websiteLogo = isDarkTheme ? logoDark : logoLight
      const btnIcon = isDarkTheme ? btnIconDark : btnIconLight

      const navBgColor = isDarkTheme ? 'nav-dark' : 'nav-light'
      const navOption = isDarkTheme ? 'option-dark' : 'option-light'

      const hr = isDarkTheme ? null : <hr className="hr" />

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      return (
        <>
          <nav className={`nav-bar ${navBgColor}`}>
            <img
              src={websiteLogo}
              alt="website logo"
              className="website-logo"
            />
            <ul className="ul-el">
              <li className="list-item">
                <Link className="nav-link" to="/">
                  <p className={navOption}>Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link className="nav-link" to="/about">
                  <p className={navOption}>About</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="button"
              onClick={onClickChangeTheme}
              data-testid="theme"
            >
              <img src={btnIcon} alt="theme" className="button-icon" />
            </button>
          </nav>
          {hr}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
