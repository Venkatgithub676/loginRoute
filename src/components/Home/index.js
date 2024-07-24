// Write your JS code here

import Header from '../Header'
import './index.css'

const Home = props => {
  const {history} = props

  return (
    <div className="home-con">
      <Header />
      <div className="home-body-con">
        <div className="home-body-dtls-con">
          <h1 className="home-body-dtls-heading">
            Clothes That Get YOU Noticed
          </h1>
          <p className="home-body-dtls-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have been always a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons and exciting
            fashion in your own way.
          </p>
          <button type="button" className="home-body-dtls-btn">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-body-dtls-img"
        />
      </div>
    </div>
  )
}

export default Home
