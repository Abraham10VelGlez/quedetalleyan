
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { ProductService } from './ProductService';
import { Image } from 'primereact/image';
export default function CarruselPrime() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1200px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1100px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '700px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '500px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    const imgjson = [{
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./taza3.jpg"
    }, {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./termo3.jpg"
    },
    {
        title: "tipodeplayera",
        subtitle: "stilo",
        description: "infomracion del producto",
        urlimg: "./taza.jpg"
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

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        //ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
        setProducts(imgjson.slice(0, 9))
    }, []);

    const productTemplate = (product) => {
        const icon = (<i className="pi pi-search"></i>)
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <div className="card flex justify-content-center">
                        <Image src={product.urlimg} indicatorIcon={icon} alt="Image" height='400' width="300" />
                    </div>
                </div>
                <div>
                    <h4 className="mb-1">{product.title}</h4>
                    <h6 className="mt-0 mb-3">${product.description}</h6>
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button className='bntcc' > Añadir </Button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />

        </div>
    )
}