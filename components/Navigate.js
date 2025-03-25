"use client";

import { useCallback, useState } from "react";

export default function Navigate() {
    const [click, setClick] = useState(1);
    
    const reasons = [
        {
            image: "/navigate/reason-1.png",
            title: "Discover",
            reason: "Explore all the investment Masters available on Blackwell Invest. Dive into their profiles and analyse their profitability at a glance."
        },
        {
            image: "/navigate/reason-2.png",
            title: "Activity",
            reason: "See the past trades made by the signals you are copying from the last 30 days or track their open positions. Monitor their strategy, and make informed decisions with timely updates of the trades shaping your portfolio."
        },
        {
            image: "/navigate/reason-3.png",
            title: "Trade",
            reason: "Seamlessly trade oil CFDs, indices, and currency pairs with ease."
        },
        {
            image: "/navigate/reason-4.png",
            title: "Positions",
            reason: "Easily track the status of all your trades and monitor your account metrics in real-time."
        },
        {
            image: "/navigate/reason-5.png",
            title: "Account",
            reason: "Access detailed information about your trading account, monitor copier drawdown levels, assess your profitability, and keep track of your  trade performance – all in one place!"
        }
    ]

    const renderReason = useCallback(() => {
        return (
            <div className={`w-full h-100 flex px-12 rounded-2xl rounded-tl-none bg-(--gold)`}>
                <div className="flex-3 self-center p-4">
                    <h3 className="text-(--dark-blue) mb-4">{reasons[click - 1].title}</h3>
                    <p className="text-black font-(family-name:--font-primary)">{reasons[click - 1].reason}</p>
                </div>
                <img className="flex-2 max-h-full " src={reasons[click - 1].image} />
            </div>
        )
    }, [click]);

    return (
    <div className="w-full px-32 my-4">
        <div className="w-full flex flex-col">
            <div className="flex rounded-lg ">
                <button onClick={() => setClick(1)} className={`${click === 1 ? "bg-(--gold)" : "bg-white"} px-2 rounded-t-md`}>
                    <img className="w-16" src={click === 1 ? "/navigate/icon1-blue.png" : "/navigate/icon1.png"} />
                </button>
                <button onClick={() => setClick(2)} className={`${click === 2 ? "bg-(--gold)" : "bg-white"} px-2 rounded-t-md`}>
                    <img className="w-16" src={click === 2 ? "/navigate/icon2-blue.png" : "/navigate/icon2.png"} />
                </button>
                <button onClick={() => setClick(3)} className={`${click === 3 ? "bg-(--gold)" : "bg-white"} px-2 rounded-t-md`}>
                    <img className="w-16" src={click === 3 ? "/navigate/icon3-blue.png" : "/navigate/icon3.png"} />
                </button>
                <button onClick={() => setClick(4)} className={`${click === 4 ? "bg-(--gold)" : "bg-white"} px-2 rounded-t-md`}>
                    <img className="w-16" src={click === 4 ? "/navigate/icon4-blue.png" : "/navigate/icon4.png"} />
                </button>
                <button onClick={() => setClick(5)} className={`${click === 5 ? "bg-(--gold)" : "bg-white"} px-2 rounded-t-md`}>
                    <img className="w-16" src={click === 5 ? "/navigate/icon5-blue.png" : "/navigate/icon5.png"} />
                </button>
            </div>
            {renderReason()}
        </div>
    </div>
    )
}