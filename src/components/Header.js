import React from "react";

export const Header = () => {
  return (
    <header className="header">
      <div className="headerInner">
        <a className="brand" href="/" aria-label="Food App home">
          <span className="brandMark" aria-hidden="true">
            FA
          </span>
          <span className="brandName">Food App</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <ul className="menu">
            <li>
              <a className="menuLink" href="#restaurants">
                Restaurants
              </a>
            </li>
            <li>
              <a className="menuLink" href="#offers">
                Offers
              </a>
            </li>
            <li>
              <a className="menuLink" href="#help">
                Help
              </a>
            </li>
          </ul>
        </nav>

        <a className="headerCta" href="#signin">
          Sign in
        </a>
      </div>
    </header>
  );
};

