import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Conutries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    const search = e => {
        e.preventDefault()
        const text = e.target.text.value;
        console.log(text)
    }
    return (
        <section>
            <div className='w-full m-auto'>
                <form onSubmit={search} className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" name='text' className="input input-bordered" />
                        <input type="submit" value="submit" className='btn btn-primary' />
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 px-10'>
                {countries?.map(country => <CountryCard country={country} key={country.ccn3} />)}
            </div>
        </section>
    );
};

export default Conutries;