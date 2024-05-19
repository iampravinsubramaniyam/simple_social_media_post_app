import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <footer className = "Footer">
        <h4>copyright &copy; {date.getFullYear()} PraveenSubramaniyam</h4>
    </footer>
  )
}

export default Footer