import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import Cardprime_optimo from './Cardsprime_render';

export default function Cardsprime() {


    const imgjson = [{
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera3.jpg"
    }, {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera2.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera2.jpg"
    }, {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera3.jpg"
    }, {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera2.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera2.jpg"
    }, {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./playera3.jpg"
    },]
    return (
        <>
            <div className="grid">
                <div className="card-container p-grid p-justify-center card-container">

                    {imgjson.map((product, index) => (
                        <div key={index} className="col-7 md:col-6 lg:col-3">
                            <div className="text-center p-3 border-round-lg cardiavg font-bold">
                                <Cardprime_optimo key={index} objt={product} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}