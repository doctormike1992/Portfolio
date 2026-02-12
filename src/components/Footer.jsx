import '../styles/footer.scss'
import copy from '../assets/copyright.svg'

export default function Footer(){
  return (
    <footer>
      <div id="line"></div>
      <p>
        <img src={copy} alt="copyright icon" />
        2026 Mixalis Priftis. Built with React & SCSS</p>
    </footer>
  )
}