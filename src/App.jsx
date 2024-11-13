import './App.css'
import PropTypes from 'prop-types'

function App(props) {
  return (
    <>
      <header>
        <h1>
          {props.greeting}, {props.subject}!
        </h1>
        <button type="button" className="primary">
          Click me!
        </button>
      </header>
    </>
  )
}

App.propTypes = {
  subject: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
}

export default App
