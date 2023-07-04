import React from 'react'
import './Footer.css'
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from '@mui/icons-material/Call';
function Footer() {
  return (
    <footer class="footer">
      <div>
        <span className='footer-icon' onClick={() => window.open("https://github.com/ShershaAhamed", "_blank")}> <GitHubIcon fontSize='small' /> </span>
        <span className='footer-icon' onClick={() => window.open("https://linkedin.com/in/shersha-ahamed-n-137846235/", "_blank")}> <LinkedInIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("mailto:ukkasnaina99@gmail.com", "_blank")}> <MailIcon fontSize='small' /></span>
        <span className='footer-icon' onClick={() => window.open("tel://+919566364289", "_blank")}> <CallIcon fontSize='small' /></span>
      </div>
      <div >
        <p class="m-2">Copyright &copy; All rights reserved | Shersha Ahamed</p>
      </div>
    </footer>
  )
}

export default Footer