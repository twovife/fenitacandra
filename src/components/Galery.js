import React from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import Image from "next/image";

import galeri1 from "../../public/Aset6/1.jpeg";
import galeri2 from "../../public/Aset6/2.jpeg";
import galeri3 from "../../public/Aset6/3.jpeg";
import galeri4 from "../../public/Aset6/4.jpeg";
import galeri5 from "../../public/Aset6/5.jpeg";
import galeri6 from "../../public/Aset6/6.jpeg";
import galeri7 from "../../public/Aset6/7.jpeg";
import galeri8 from "../../public/Aset6/8.jpeg";

const Galery = () => {
    return (
        <LightGallery
            speed={500}
            plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
            elementClassNames="grid grid-cols-2 gap-x-4 gap-y-6"
            mode="lg-fade">
            <a href={"Aset6/1.jpeg"}>
                <Image alt="foto praweding" src={galeri1} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/2.jpeg"}>
                <Image alt="foto praweding" src={galeri2} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/3.jpeg"}>
                <Image alt="foto praweding" src={galeri3} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/4.jpeg"}>
                <Image alt="foto praweding" src={galeri4} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/5.jpeg"}>
                <Image alt="foto praweding" src={galeri5} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/6.jpeg"}>
                <Image alt="foto praweding" src={galeri6} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/7.jpeg"}>
                <Image alt="foto praweding" src={galeri7} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
            <a href={"Aset6/8.jpeg"}>
                <Image alt="foto praweding" src={galeri8} className="object-cover object-center w-full h-56 rounded-lg" />
            </a>
        </LightGallery>
    );
};

export default Galery;
