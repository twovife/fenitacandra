"use client";
import CountdownTimer from "@/components/CountdownTimer ";
import Cover from "@/components/Cover";
import SaveTheDate from "@/components/SaveTheDate";
import WeedingGift from "@/components/WeedingGift";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
    const [hideCover, setHideCover] = useState(false);

    const [audio, setAudio] = useState(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        const newAudio = new Audio("/songs.mp3");
        newAudio.preload = "auto";
        newAudio.onloadeddata = () => {
            setAudio(newAudio);
        };
        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, []);

    useEffect(() => {
        if (audio) {
            if (isPlaying) {
                audio.play();
            } else {
                audio.pause();
            }
        }
    }, [audio, isPlaying]);

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="antialiased relative z-10 w-full h-screen">
            <div className="audio-player">
                <button onClick={toggleAudio}>{isPlaying ? "Pause" : "Play"}</button>
                {/* Additional controls like volume, seek bar, etc. can be added here */}
            </div>
            <div className="max-w-lg mx-auto">
                <Cover hideCover={hideCover} setHideCover={setHideCover} />
                <div id="page1" className="min-h-screen relative z-10">
                    <div className="w-full absolute h-1/2 bg-gradient-to-b from-main via-main to-transparent z-30 text-xs md:text-base">
                        <div className="py-6 px-10 text-center font-semibold ">
                            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri,
                            supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang.
                            Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2">
                            <Image alt="image" src={"/Aset1/7a.png"} width={75} height={75} />
                            <span>(Qs. Ar. Rum (30) : 21 )</span>
                            <Image alt="image" src={"/Aset1/7b.png"} width={75} height={75} />
                        </div>
                    </div>
                    <Image alt="image" src={"/Aset1/2.png"} width={500} height={500} className="w-full absolute z-20 bottom-0 left-0" />
                    <Image alt="image" src={"/Aset1/6.png"} width={500} height={500} className="w-3/5 absolute z-20 bottom-0 left-0" />
                </div>
                <div id="page2" className="w-full bg-main p-6 relative z-10">
                    <Image alt="image" src={"/Aset2/2.png"} width={500} height={500} className="w-3/5 absolute z-20 top-0 left-0" />
                    <Image
                        alt="image"
                        src={"/Aset2/4.png"}
                        width={500}
                        height={500}
                        className="w-2/6 absolute z-20 top-1/2 -translate-y-1/2 right-0"
                    />
                    <Image
                        alt="image"
                        src={"/Aset2/3.png"}
                        width={500}
                        height={500}
                        className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2"
                    />
                    <div className="w-full bg-white/50 relative z-30 rounded">
                        <div className="w-full flex items-center justify-center flex-col py-6 gap-6">
                            <Image alt="image" src={"/Aset2/6.png"} width={500} height={500} className="w-2/5" />
                            <div className="text-center max-w-md font-semibold">
                                Assalamualaikum Wr. Wb. Dengan memohon Rahmat & Ridho Allah SWT, kami bermaksud mengundang
                                Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan putra-putri kami :
                            </div>
                            <Image alt="image" src={"/Aset2/8.png"} width={500} height={500} className="w-4/5" />
                            <Image alt="image" src={"/Aset2/9.png"} width={500} height={500} className="w-2/3" />
                            <Image alt="image" src={"/Aset2/10.png"} width={500} height={500} className="w-2/5" />
                            <Image alt="image" src={"/Aset2/11.png"} width={300} height={300} className="w-1/6" />
                        </div>
                    </div>
                </div>
                <div id="page3" className="w-full bg-main p-6 relative z-10">
                    <Image
                        alt="image"
                        src={"/Aset3/3.png"}
                        width={500}
                        height={500}
                        className="w-full absolute z-20 top-0 left-1/2 -translate-x-1/2"
                    />
                    <Image
                        alt="image"
                        src={"/Aset2/4.png"}
                        width={500}
                        height={500}
                        className="w-2/6 absolute z-20 top-1/2 -translate-y-1/2 right-0"
                    />
                    <Image
                        alt="image"
                        src={"/Aset2/3.png"}
                        width={500}
                        height={500}
                        className="w-full absolute z-20 bottom-0 left-1/2 -translate-x-1/2"
                    />
                    <div className="w-full bg-white/50 relative z-30 rounded">
                        <div className="w-full flex items-center justify-center flex-col py-6 gap-6">
                            <Image alt="image" src={"/Aset3/6.png"} width={500} height={500} className="w-4/5" />
                            <Image alt="image" src={"/Aset3/7.png"} width={500} height={500} className="w-2/3" />
                            <Image alt="image" src={"/Aset3/8.png"} width={500} height={500} className="w-2/5" />
                            <Image alt="image" src={"/Aset3/9.png"} width={300} height={300} className="w-4/5" />
                            <Image alt="image" src={"/Aset3/10.png"} width={300} height={300} className="w-4/5" />
                            <CountdownTimer />
                            <Link
                                className="bg-gray-800 px-4 py-2 text-white rounded"
                                target="blank"
                                href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240427T170000Z%2F20240427T170000Z&details=%22Setiap%20senyuman%20dan%20tawa%20dari%20Bapak%2FIbu%2FSaudara%2Fi%20akan%20menjadi%20penyemangat%20bagi%20kami%20dalam%20membangun%20rumah%20tangga%20yang%20harmonis.%20Kami%20sangat%20berharap%20Bapak%2FIbu%2FSaudara%2Fi%20dapat%20hadir%20dan%20menjadi%20bagian%20dari%20momen%20spesial%20ini.%22&location=https%3A%2F%2Fmaps.app.goo.gl%2Fe9UkLcmyhrZR2uqMA&text=Wedding%20Fenita%20%26%20Candra`}>
                                Save The Date
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <SaveTheDate />
            <WeedingGift />
        </div>
    );
}
