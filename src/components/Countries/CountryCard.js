import React from 'react';

const CountryCard = ({ country }) => {
    const { flags, name } = country;
    console.log(country)
    return (
        <div class="card bg-base-100 shadow-xl image-full">
            <figure><img src={flags?.png} className="w-full" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name.common}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;