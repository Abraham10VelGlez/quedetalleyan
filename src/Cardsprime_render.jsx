import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

export default function Cardprime_optimo({ objt }) {

    const icon = (<i className="pi pi-search"></i>)
    const { title, subtitle, description, urlimg } = objt

    const header = (
        <Image src={urlimg} indicatorIcon={icon} alt="Image" preview width="250" height='250' />
    );

    const footer = (
        <div className="flex flex-wrap justify-content-center gap-2 " >
            <Button label="Agregar al Carrito" icon="pi pi-cart-arrow-down" className='btniavg' />

        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subtitle} footer={footer} header={header} className="md:w-25rem cardcontenidoiavg" >
                <p className="m-0 ">
                    {description}
                </p>
            </Card>


        </div>



    )
}