import { Heart } from "lucide-react" // For a cute heart icon
import "./footer.css"

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p className="footer-text">
          Made with <Heart className="footer-icon" /> by DevRiham
        </p>
        <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
