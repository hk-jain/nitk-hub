
import React from 'react';
import { Link } from 'react-router-dom';

const Landing =  () => {
    return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">NitK Hub</h1>
           <div>
                <button className="button button--pan" onClick='/register'>
                        <span>
                            <Link to='/register'>
                            Sign Up
                            </Link>
                        </span>
                </button>
                <button className="button button--pan" onClick='login'>
                    <span>
                        <Link to='/login'>
                        Login
                        </Link>
                    </span>
                </button>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Landing;
