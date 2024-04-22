import React from "react";
import AsetBg1 from "../../public/Aset3/3.png";
import AsetBg2 from "../../public/Aset2/3.png";
import AsetBg4 from "../../public/Aset2/4.png";

import Image from "next/image";

const Templates = ({ children }) => {
    return (
        <div id="page5" className="w-full bg-main relative z-10 mx-auto max-w-lg ">
            <Image alt="image" src={AsetBg1} width={500} height={500} className="w-full absolute z-20 top-0 left-1/2 -translate-x-1/2" />
            <Image alt="image" src={AsetBg4} width={500} height={500} className="w-2/6 absolute z-20 top-1/2 -translate-y-1/2 right-0" />
            <Image alt="image" src={AsetBg2} width={500} height={500} className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2" />
            {children}
        </div>
    );
};

export default Templates;
