import React from 'react'

function Footer() {
  return (
    <footer className="page-footer">
        <div className="container">
            <p>                   
                © {new Date().getFullYear()} Dmitry Chuprakov
            </p>
        </div>
    </footer>
  )
}

export default Footer