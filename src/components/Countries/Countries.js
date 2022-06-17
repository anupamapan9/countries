import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const Conutries = () => {
    const [countries, setCountries] = useState([])
    const [url, setUrl] = useState("https://restcountries.com/v3.1/all")
    console.log(countries)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === 404) {
                    setCountries(null)
                    return
                }
                if (data.message === "Page Not Found") {
                    setCountries(null)
                    return
                }
                setCountries(data)
            })
    }, [url])

    const search = e => {
        e.preventDefault()
        const text = e.target.text.value;
        if (text === '') {
            return
        }
        setUrl(`https://restcountries.com/v3.1/name/${text}`)
    }

    return (
        <section>
            <div className='flex justify-center py-10'>
                <form onSubmit={search} className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" name='text' className="input input-bordered" />
                        <input type="submit" value="submit" className='btn btn-primary' />
                    </div>
                </form>
            </div>
            {
                countries === null && <div>
                    <h1 className='text-center font-bold text-4xl text-red-600'>No result found</h1>
                </div>
            }
            {
                countries && <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 px-10'>
                    {
                        countries?.map(country => <CountryCard country={country} key={country.ccn3} />)}
                </div>
            }

        </section>
    );
};

export default Conutries;