import React, { useState } from "react";

import Aset7 from "../../public/Aset5/7.png";
import Aset8 from "../../public/Aset5/8.png";
import Aset9 from "../../public/Aset5/9.png";
import bca from "../../public/Aset6/BCA.png";
import bri from "../../public/Aset6/BRI.png";
import dana from "../../public/Aset6/dana.jpg";
import Galery from "./Galery";
import Image from "next/image";
import Templates from "./Templates";

const WeedingGift = () => {
    const [copied, setCopied] = useState(false);
    const handleClick = async (params) => {
        try {
            await navigator.clipboard.writeText(params);
            setCopied(true);
        } catch (err) {
            console.error("Failed to copy text:", err);
        } finally {
            setTimeout(() => setCopied(false), 1000); // Reset copied state after 1 second
        }
    };

    const [hidePayment, setHidePayment] = useState(true);
    console.log(hidePayment);
    const handleHidePayment = () => {
        setHidePayment(!hidePayment);
    };
    return (
        <Templates>
            <div className="p-6">
                <div className="w-full bg-gradient-to-b from-white/50 to-main relative z-30 rounded">
                    <div className="py-6 pb-0">
                        <Galery />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col py-6 pb-0">
                        <Image alt="image" src={Aset7} width={500} height={500} className="w-4/5" />
                        <Image alt="image" src={Aset8} width={500} height={500} className="w-2/3" />
                        <Image
                            alt="image"
                            onClick={handleHidePayment}
                            src={Aset9}
                            width={500}
                            height={500}
                            className="w-2/6 hover:cursor-pointer"
                        />
                        <div className={`p-3 w-full ${hidePayment ? `h-0` : `h-auto`} overflow-hidden transition-all duration-700 ease-in`}>
                            <div className="bg-white/50 rounded border shadow-sm p-6 max-w-sm w-full mx-auto">
                                <div className="flex items-center gap-3">
                                    <Image alt="image" src={bca} width={100} height={100} />
                                    <div>
                                        <div className="font-semibold">Bank BCA</div>
                                        <div className="font-semibold">625501020468538</div>
                                        <div className="flex justify-start items-center gap-3">
                                            <div className="font-semibold">(An. Fenita)</div>
                                            <button
                                                className="text-xs bg-gray-500 text-white rounded px-3 py-1.5"
                                                onClick={() => handleClick("625501020468538")}>
                                                {copied ? "Copied!" : "Copy Rek BCA"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-3">
                                    <div className="text-right">
                                        <div className="font-semibold">Bank BRI</div>
                                        <div className="font-semibold">0332925715</div>
                                        <div className="flex justify-start items-center gap-3">
                                            <button
                                                className="text-xs bg-gray-500 text-white rounded px-3 py-1.5"
                                                onClick={() => handleClick("0332925715")}>
                                                {copied ? "Copied!" : "Copy Rek BRI"}
                                            </button>
                                            <div className="font-semibold">(An. Fenita)</div>
                                        </div>
                                    </div>
                                    <Image alt="image" src={bri} width={100} height={100} />
                                </div>
                                <div className="flex items-center gap-3">
                                    <Image alt="image" src={dana} width={100} height={100} />
                                    <div>
                                        <div className="font-semibold">Dana</div>
                                        <div className="font-semibold">087762750051</div>
                                        <div className="flex justify-start items-center gap-3">
                                            <div className="font-semibold">(An. Fenita)</div>
                                            <button
                                                className="text-xs bg-gray-500 text-white rounded px-3 py-1.5"
                                                onClick={() => handleClick("087762750051")}>
                                                {copied ? "Copied!" : "Copy No Dana"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image alt="image" src={"/Aset5/10.png"} width={300} height={300} className="w-3/5" />
                        <Image alt="image" src={"/Aset5/11.png"} width={300} height={300} className="w-2/3" />
                        <Image alt="image" src={"/Aset5/12.png"} width={300} height={300} className="w-1/4" />
                    </div>
                </div>
            </div>
        </Templates>
    );
};

export default WeedingGift;
