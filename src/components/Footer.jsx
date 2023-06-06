import React from 'react'

function Footer() {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()}
                    &nbsp;nkrmldrk
                    <a className="grey-text text-lighten-4 right" href="https://github.com/nkrmldrk">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer