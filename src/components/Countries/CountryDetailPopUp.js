import React, { useEffect, useState } from 'react';

const CountryDetailPopUp = ({ setConfirm, confirm, code }) => {
    const [country, setCountry] = useState({})
    const [loading, setLoading] = useState(true)
    const url = `https://restcountries.com/v3.1/alpha/${code}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.status === 404) {
                    setCountry(null)
                    return
                }
                if (data.message === "Page Not Found") {
                    setCountry(null)
                    return
                }
                setCountry(data[0])
                setLoading(false)
            })
    }, [url])
    const { flags, name, capital, region, borders, subregion, population } = country

    return (
        <div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" onClick={() => setConfirm(!confirm)} class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>

                        <figure>
                            <img src={flags?.png} className="w-28" alt="" />
                        </figure>

                        <h3 className='font-medium text-2xl'>Showing the details of: <span className='text-green-500'>{name?.common}</span> </h3>
                        <div className='grid grid-cols-1 md:grid-cols-2 text-lg'>
                            <h5><span className='font-bold'>Capital:</span> {capital}</h5>
                            <h5><span className='font-bold'>Region:</span> {region}</h5>
                            <h5><span className='font-bold'>Borders:</span> {borders?.map((b, index) => <span key={index}>{b}, </span>)}
                            </h5>
                            <h5><span className='font-bold'>Subregion:</span> {subregion}</h5>
                            <h5><span className='font-bold'>Population:</span> {population}</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailPopUp;