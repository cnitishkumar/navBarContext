// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgHome = isDarkTheme ? 'bg-dark' : 'bg-light'
      const headingClass = isDarkTheme
        ? 'about-heading-dark'
        : 'about-heading-light'

      return (
        <div className={bgHome}>
          <Navbar />
          <div className="about-container">
            <img src={aboutImage} alt="about" className="about-image" />
            <h1 className={headingClass}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
