import Image from "next/image";
import React from "react";

const Cover = ({ hideCover, setHideCover }) => {
    const handleOpenCover = () => {
        setHideCover(!hideCover);
    };
    return (
        <div
            className={`w-full h-screen z-[50] absolute left-0 top-0 ${
                hideCover ? `-translate-y-full opacity-0` : `translate-y-0 opacity-100`
            } duration-300 transition-all ease-out`}>
            <div className="relative z-[10] w-full h-screen max-w-lg mx-auto">
                <div className="absolute w-full h-full bg-black/45 top-0 left-0 z-10"></div>
                <Image
                    src={"/Cover/3.png"}
                    width={500}
                    height={500}
                    alt="foto-bunga01"
                    className="absolute z-10 w-4/5 top-0 left-1/2 -translate-x-1/2"
                />
                <Image
                    src={"/Cover/4.png"}
                    width={500}
                    height={500}
                    alt="foto-bunga02"
                    className="absolute z-10 w-full bottom-0 left-1/2 -translate-x-1/2"
                />
                <div className="absolute z-10 top-0 left-0 w-full h-full">
                    <div className="flex flex-col h-full items-center justify-center gap-16">
                        <div className="flex flex-col items-center">
                            <Image src={"/Cover/5.png"} width={500} height={500} alt="foto-bunga05" className="w-2/3" />
                            <Image src={"/Cover/6.png"} width={500} height={500} alt="foto-bunga06" className="w-1/2" />
                        </div>
                        <div className="flex flex-col items-center">
                            <Image src={"/Cover/7.png"} width={500} height={500} alt="foto-bunga05" className="w-3/6 translate-y-1/4" />
                            <Image src={"/Cover/8.png"} width={500} height={500} alt="foto-bunga06" className="w-1/12" />
                            <Image src={"/Cover/9.png"} width={500} height={500} alt="foto-bunga06" className="w-3/4 -translate-y-1/3" />
                            <button
                                onClick={handleOpenCover}
                                className="text-xl text-black px-5 py-2 rounded-lg font-semibold bg-white uppercase">
                                Open
                            </button>
                        </div>
                    </div>
                </div>

                <Image src={"/Cover/bgcover.png"} width={500} height={500} alt="cover" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default Cover;
