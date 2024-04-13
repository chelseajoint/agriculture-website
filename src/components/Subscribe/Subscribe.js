import React from 'react';
import Button from '../Button/Button';

import './Subscribe.scss';

const Subscribe = () => {
    return (
        <section className='section'>
            <h2>Subscribe to <br/> our Newsletter</h2>
            <form>
                <input placeholder="Your Email Address" />
                <Button style='pagination' text='Subscribe' type='submit'/>
            </form>
        </section>
    )
}

export default Subscribe;
