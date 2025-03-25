"use client";

import { useState } from "react";

export default function Guide() {
      const [guide, setGuide] = useState(1);

    return (
<div className="w-full px-32 my-4">
        <div className="flex h-120 gap-4">
            <div className=" flex-1 flex flex-col gap-4 rounded-lg justify-items-start">
                    <button onClick={() => setGuide(1)} className={`${guide === 1 && "guide-tab-clicked"} guide-tab border-(--gold)`}>
                        <h3 className="italic text-(--gold)">1</h3>
                        Install our app, “Blackwell Invest”</button>
                    <button onClick={() => setGuide(2)} className={`${guide === 2 && "guide-tab-clicked"} guide-tab border-(--orange)`}>
                        <h3 className="italic text-(--orange)">2</h3>
                        Choose a signal Master and click “Copy”</button>
                    <button onClick={() => setGuide(3)} className={`${guide === 3 && "guide-tab-clicked"} guide-tab border-(--gold)`}>
                        <h3 className="italic text-(--gold)">3</h3>
                        Set your trade size preferences</button>
                    <button onClick={() => setGuide(4)} className={`${guide === 4 && "guide-tab-clicked"} guide-tab border-(--orange)`}>
                        <h3 className="italic text-(--orange)">4</h3>
                        Click “Agree and Copy”</button>
            </div>

                {guide === 1 && 
                <div className={`flex-1 justify-items-center p-4 transition-all duration-300 rounded-3xl bg-(--background) border-1 border-(--gold) ${guide === 1 && "rounded-tl-none"}`}>
                    <img className="max-h-full" src="/guide/guide-1.png" />
                </div>
                }

                {guide === 2 &&
                    <div className={`flex-1 justify-items-center p-4 transition-all duration-300 rounded-3xl bg-(--background) border-1 border-(--orange)`}>
                    <img className="max-h-full" src="/guide/guide-2.png" />
                </div>
                }

                {guide === 3 &&
                    <div className={`flex-1 justify-items-center p-4 transition-all duration-300 rounded-3xl bg-(--background) border-1 border-(--gold)`}>
                    <img className="max-h-full" src="/guide/guide-3.png" />
                </div>
                }

                {guide === 4 &&
                    <div className={`flex-1 justify-items-center p-4 transition-all duration-300 rounded-3xl bg-(--background) border-1 border-(--orange) ${guide === 4 && "rounded-bl-none"}`}>
                    <img className="max-h-full" src="/guide/guide-4.png" />
                </div>
                }
        </div>
    </div>
    )
}