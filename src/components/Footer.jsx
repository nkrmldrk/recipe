import React from 'react'

function Footer() {
    return (
        <footer className="page-footer #4db6ac teal lighten-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;Dima Sveta Nastja 
                    <a className="grey-text text-lighten-4 right" href="https://github.com/nkrmldrk">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export {Footer}