import React from "react";
import "./burger-menu.css";
import Baseline from "../../baseline.inline.svg";

export default class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.setIsNavOpen = () => {
      this.setState({
        isNavOpen: !this.state.isNavOpen,
      });
    };
  }
  render() {
    const { isNavOpen } = this.state;
    return (
      <div className="burger-container">
        <nav>
          <section className="burger-section">
            <div
              className="hamburger-icon"
              role="button"
              tabIndex={0}
              onClick={() => this.setState({ isNavOpen: true })}
              onKeyDown={0}
            >
              <span className="span-1"></span>
              <span className="span-1"></span>
              <span className="span-1"></span>
            </div>

            <div className={` ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
              <div
                className="button-is-open"
                role="button"
                tabIndex={0}
                onClick={() => this.setState({ isNavOpen: false })}
                onKeyDown={0}
              >
                <svg
                  className="svg1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="list-modal-item">
                <li className="li-1">
                  <div className="div-1">
                    <a href="/">
                      <Baseline className="sv-2" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="./">L'agence</a>
                </li>
                <li>
                  <a href="./">Nos Talents</a>
                </li>
                <li>
                  <a href="./">Prestations</a>
                </li>
                <li>
                  <a href="./">Contact</a>
                </li>
              </ul>
            </div>
          </section>
        </nav>
      </div>
    );
  }
}
