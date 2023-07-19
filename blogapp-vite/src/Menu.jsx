import "./Main.css";

function Menu() {
  return (
    <div className="Wrapper">
      <header className="Header">
        <ul className="Wr">
          <nav className="Navmr">
            <ul className="Wr">
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/sf-regular-filled/48/github.png"
                    alt="github"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/discord--v2.png"
                    alt="discord--v2"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/telegram-app.png"
                    alt="telegram-app"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <button className="ThemeMode" href="#">
            THEME
          </button>
        </ul>
      </header>
    </div>
  );
}

export default Menu;
