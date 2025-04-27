import { FaGithub, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <span className="seguime">Seguime en:</span>
        <a href="https://github.com/tuusuario" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noreferrer">
          <FaInstagram size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;