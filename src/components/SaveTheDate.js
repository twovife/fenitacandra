import React from "react";
import Templates from "./Templates";
import Link from "next/link";
import aset4 from "../../public/Aset4/12.png";
import Image from "next/image";

const SaveTheDate = () => {
    return (
        <Templates>
            <div className="p-6 pb-0">
                <div className="w-full bg-gradient-to-b from-white/50 to-main relative z-30 rounded">
                    <div className="w-full flex items-center justify-center flex-col py-6 pb-0">
                        <Image alt="image" src={"/Aset4/6.png"} width={500} height={500} className="w-4/5" />
                        <Image alt="image" src={"/Aset4/7.png"} width={500} height={500} className="w-2/3" />
                        <Image alt="image" src={"/Aset4/8.png"} width={500} height={500} className="w-2/5" />
                        <Image alt="image" src={"/Aset4/9.png"} width={300} height={300} className="w-4/5" />
                        <Image alt="image" src={"/Aset4/10.png"} width={300} height={300} className="w-2/5" />
                    </div>
                </div>
            </div>
            <div className="w-full relative z-30">
                <div className="w-full h-[15%] absolute top-0 left-0 bg-gradient-to-b from-main from-40% to-transparent"></div>
                <div className="w-full h-[15%] absolute bottom-0 left-0 bg-gradient-to-t from-main from-40% to-transparent"></div>
                <Image alt="image" src={aset4} width={300} height={300} className="w-full" />
            </div>
            <div className="p-6 pt-0">
                <div className="w-full bg-gradient-to-t from-white/50 to-main relative z-30 rounded">
                    <div className="w-full flex items-center justify-center flex-col py-6 pt-0">
                        <Image alt="image" src={"/Aset4/15.png"} width={500} height={500} className="w-2/5" />
                        <Image alt="image" src={"/Aset4/16.png"} width={300} height={300} className="w-4/5" />
                        <Image alt="image" src={"/Aset4/17.png"} width={300} height={300} className="w-2/12" />
                        <Image alt="image" src={"/Aset4/18.png"} width={300} height={300} className="w-4/12" />
                        <Image alt="image" src={"/Aset4/19.png"} width={300} height={300} className="w-5/12" />
                        <Image alt="image" src={"/Aset4/20.png"} width={300} height={300} className="w-11/12" />
                        <Image alt="image" src={"/Aset4/21.png"} width={300} height={300} className="w-8/12" />
                        <Link
                            className="bg-gray-800 px-4 py-2 text-white rounded"
                            target="blank"
                            href={`https://maps.app.goo.gl/e9UkLcmyhrZR2uqMA`}>
                            Open Maps
                        </Link>
                    </div>
                </div>
            </div>
        </Templates>
    );
};

export default SaveTheDate;
