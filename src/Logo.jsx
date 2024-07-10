import React from 'react';
import { Image } from 'primereact/image';

export default function Logo() {
  const icon = (<i className="pi pi-search"></i>);

  return (
    <>
      <div className="grid">
        <div className="col-6 col-offset-3">
          <div className='centrador'>
            <div className="customlogo">
              <Image src="./logo_20240709_172102_0000.png" width="200" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
