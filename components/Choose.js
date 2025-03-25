export default function Choose() {
    const reasons = [
        {
            icon: "/choose/icon-1.png",
            title: "Regulated",
            reason: "The copy trading platform is regulated. Our technology partner is regulated. And so are we, as a brokerage. We operate under strict compliance because your trust and peace of mind are everything."
        },
        {
            icon: "/choose/icon-2.png",
            title: "0 Commissions",
            reason: "When investing, the small margins matter. Blackwell Invest offers 0 commissions investing, and 0 cost to install our app."
        },
        {
            icon: "/choose/icon-3.png",
            title: "User-friendly",
            reason: "With an intuitive interface, easy trade execution, and hassle-free management, copying top traders has never been simpler. Trade smarter, not harder!"
        },
        {
            icon: "/choose/icon-4.png",
            title: "Tier 1 liquidity",
            reason: "Blackwell Invest sources the best liquidity to provide a deep product range and broad market access. Fast order execution and transparent pricing."
        }
    ]

    return (
        <div className="w-full px-32 my-4">
            {
                reasons.map((row, index) => 
                    <div key={index} className="bg-white rounded-2xl m-2 items-center flex">
                        <div className="flex-1 justify-items-center">
                            <img className="w-20" src={row.icon} />
                        </div>
                        <h4 className="flex-2 justify-items-center text-(--dark-blue)">{row.title}</h4>
                        <p className="text-black flex-7 font-(family-name:--font-primary)">{row.reason}</p>
                    </div>
                )
            }
        </div>
        )
}