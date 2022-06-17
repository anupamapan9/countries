import React, { useState } from 'react';
import CountryDetailPopUp from './CountryDetailPopUp';

const CountryCard = ({ country }) => {
    const { flags, name } = country;
    const [confirm, setConfirm] = useState(false)
    return (
        <>
            <div class="card bg-base-100 shadow-xl image-full">
                <figure><img src={flags?.png} className="w-full" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name.common}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <label class="btn btn-primary" onClick={() => setConfirm(!confirm)} for="my-modal-3" >Details</label>
                    </div>
                </div>
                {
                    confirm && <CountryDetailPopUp setConfirm={setConfirm} confirm={confirm} />
                }
            </div>


        </>

    );
};

export default CountryCard;