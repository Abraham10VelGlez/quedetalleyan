import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

export default function Cardprime_optimo({ objt }) {

    const icon = (<i className="pi pi-search"></i>)
    const { title, subtitle, description, urlimg } = objt

    const header = (
        <Image  src={urlimg} indicatorIcon={icon} alt="Image" preview width="250" />
    );

    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Añadir" icon="pi pi-check" />
            <Button label="Info" icon="pi pi-times" severity="secondary" />
        </div>
    );

    return (
        <div className="card flex justify-content-center">
            <Card title={title} subTitle={subtitle} footer={footer} header={header} className="md:w-25rem">
                <p className="m-0">
                    {description}
                </p>
            </Card>


        </div>



    )
}