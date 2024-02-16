import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const bgHome = isDarkTheme ? 'bg-dark' : 'bg-light'
      const headingClass = isDarkTheme
        ? 'home-heading-dark'
        : 'home-heading-light'

      return (
        <div className={bgHome}>
          <Navbar />
          <div className="home-container">
            <img src={homeImage} alt="home" className="home-image" />
            <h1 className={headingClass}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
