import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MegaMenu } from 'primereact/megamenu';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
export default function MenubarPrime() {
    /*const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );*/
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-home',
            url: '/',           
        },
        {
            label: 'Cajas',
            icon: 'pi pi-gift',
            url: '/QueDetalleBox',           
        },
        {
            label: 'Tazas',
            icon: 'pi pi-gift'
        },
        {
            label: 'Playeras',
            icon: 'pi pi-gift'
        },
        {
            label: 'Termos',
            icon: 'pi pi-gift'
        },
        /*{
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },*/
        {
            label: 'Contacto',
            icon: 'pi pi-envelope',
            badge: 5,
            /*template: itemRenderer*/
        },
        {
            label: 'Acerda de',
            icon: 'pi pi-user',
            badge: 5,

        }
    ];

    //const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const start = <img alt="logo" src="./logo_20240709_172102_0002.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            {/*<InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/logo.png" shape="circle" />*/}
        </div>
    );

    return (
        <div className="card">
            {/*<Menubar model={items}  end={end} />*/}
            <MegaMenu model={items} orientation="horizontal" end={end} breakpoint="960px" className="p-2 surface-1 shadow-8 meniavg" style={{ borderRadius: '5rem' }} />
        </div>
    )
}



