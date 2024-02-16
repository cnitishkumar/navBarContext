// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundHeading = isDarkTheme ? 'heading-dark' : 'heading-light'
      const notFoundTagLine = isDarkTheme ? 'tag-line-dark' : 'tag-line-light'
      const bgColor = isDarkTheme ? 'bg-dark' : 'bg-light'

      return (
        <>
          <Navbar />
          <div className={`not-found-container ${bgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={notFoundHeading}>Lost Your Way?</h1>
            <p className={notFoundTagLine}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
