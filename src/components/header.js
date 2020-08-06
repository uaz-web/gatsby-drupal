import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

var arizonaLogo = {
  display: "inline-block",
  height: "20px",
  margin: "19px 0 20px",
  maxWidth: "80%",
  float: "left",
  width: "276px",
  padding: "0 0 0 .6rem"
}

const Header = ({ siteTitle }) => (
  <header style={{
    backgroundColor: `#ab0520`,
    marginBottom: `1.45rem`,
  }}>
    <section className="container l-container">
      <div className="row">
        <div className="col-xs-10 col-sm-6">
          <Link to="/" style={arizonaLogo}>
            <img
              alt="The University of Arizona"
              src="https://cdn.uadigital.arizona.edu/logos/v1.0.0/ua_wordmark_line_logo_white_rgb.min.svg"
            />
          </Link>
        </div>
      </div>
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
