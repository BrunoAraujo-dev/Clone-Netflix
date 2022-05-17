import "./Header.css";

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5-1.png"
            alt="netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://cdn-icons.flaticon.com/png/512/552/premium/552909.png?token=exp=1652364339~hmac=df71d6f244ea848bfffaefea36aa34fa"
            alt="usuario"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
