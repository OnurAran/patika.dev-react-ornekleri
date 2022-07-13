import React from 'react'
import '../style/NavigationBarStyle.css'

function NavigationBar() {
  return (
    <>
      <ul className='NavBar'>
        <li><a className="active" href="#home">Ana Sayfa</a></li>
        <li><a href="#news">Hesapla</a></li>
        <li><a href="#contact">İletişim</a></li>
        <li className="about" ><a  href="#about">Hakkında</a></li>
      </ul>
    </>
  )
}

export default React.memo(NavigationBar);