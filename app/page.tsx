import Navbar from '@/components/NavBar';
import Guide from '@/components/Guide';
import Register from '@/components/Register';
import Choose from '@/components/Choose';
import Navigate from '@/components/Navigate';
import Form from '@/components/Form';
import RegisterButton from '@/components/RegisterButton';

const highlights = ["Spotlight", "Top Strategies", "Low Drawdown", "Medium Drawdown", "High Drawdown", "New Strategies"];

export default function Home() {

  return (
    <div>
      <Navbar>
    </Navbar>
      <main className="relative h-full pt-40 mx-4 md:mx-32 flex-col justify-items-center">
        <div className="flex flex-row-reverse">
          <img className="absolute w-2/5 h-screen top-32 left-0 object-cover object-right" src="/hand.png" />
          <div className="w-3/5 justify-items-center">
            <div className="relative flex flex-col items-center">
              <h1 className="my-2">COPY TRADING</h1>
              <h2 className="my-2 italic">with Blackwell Invest</h2>
              <div className="flex flex-row">
                <img className="w-40 object-contain m-3 rounded-lg" src="/google-play.jpg"/>
                <img className="w-40 object-contain m-3 rounded-lg" src="/app-store.jpg"/>
              </div>
              <img className="absolute -z-1 w-40 object-contain right-0 -bottom-20" src="/regular.png"/>
            </div>
            <div className="relative flex flex-col items-start mx-40 my-20 font-(family-name:--font-primary)">
              <h3 className="text-(--light-blue)">Choose & Trade</h3>
              <h3 className="text-(--gold) italic">Ready-To-Go Strategies</h3>
              <p className="">Browse and copy hundreds of investment strategies developed by master traders! Whether you are a pro or beginner, you can now trade quicker and more confidently.              </p>
              <div className="my-4 grid grid-flow-col gap-4">
                <span className="px-3 py-2 border-1 border-(--gold) rounded-md">Forex</span>
                <span className="px-3 py-2 border-1 border-(--orange) rounded-md">Precious Metals</span>
                <span className="px-3 py-2 border-1 border-red-500 rounded-md">Oil</span>
                <span className="px-3 py-2 border-1 border-(--light-blue) rounded-md">Indices</span>
              </div>
              <RegisterButton/>
              <span className="italic text-sm font-(family-name:--font-secondary)">When you invest, your capital is at risk. Be prudent.</span>
            </div>
          </div>
        </div>
        {/* FAST MATACHING */}
        <div className="flex-col justify-items-center">
          <h3 className="text-(--light-blue) m-8">Fast Matching</h3>
          <div className="flex">
            <img className="w-50 object-cover object-right mr-8" src="/mobile-1.png" />
            <li className="content-center list-none">
              {highlights.map(highlight => 
                <>
                  <ul className="flex gap-2 my-2">
                    <img className="w-14 object-contain" src="/list-icon.png" />
                    <span className="text-2xl">{highlight}</span>
                  </ul>
                </>
              )}
              
            </li>
          </div>
        </div>
        {/* ANALYSIS */}
        <div className="w-3/5 flex-col justify-items-center m-16">
          <h3 className="text-(--light-blue) m-4">Easy Analysis</h3>
          <h4 className="text-(--gold) m-4 text-center">Instant clarity on the Masters’ profile. Get a snapshot of their trade history, profitability, risk, and portfolio all in one place. </h4>
          <div className="relative m-12">
            <img className="w-50 object-cover object-right shadow-[0_0_30px_rgba(0,0,0,0.5)] rounded-3xl" src="/analysis/mobile-2.png" />
            <img className="absolute -top-5 -left-25 w-50" src="/analysis/function-1.png" />
            <img className="absolute top-18 -right-25 w-50" src="/analysis/function-2.png" />
            <img className="absolute top-35 -left-25 w-50" src="/analysis/function-3.png" />
            <img className="absolute top-50 -right-25 w-50" src="/analysis/function-4.png" />
            <img className="absolute -bottom-5 -left-25 w-50" src="/analysis/function-5.png" />
          </div>
        </div>
        {/* GUIDE */}
        <div className="relative h-screen flex-col justify-items-center m-16">
          <img src="/bg-1.png" />
          <div className="absolute w-full top-64 justify-items-center">
            <h3 className="text-(--light-blue) m-6">Trade Like a Pro in Minutes</h3>
            <Guide />
            <div className="flex flex-row">
                <img className="w-40 object-contain m-3 rounded-lg" src="/google-play.jpg"/>
                <img className="w-40 object-contain m-3 rounded-lg" src="/app-store.jpg"/>
            </div>
          </div>
        </div>
        {/* REGISTER */}
        <Register />
        {/* CHOOSE US */}
        <div className="relative h-screen flex-col justify-items-center mt-16 -mb-16">
          <img src="/bg-2.png" />
          <div className="absolute w-full top-64 justify-items-center">
            <h3 className="text-(--light-blue) m-6">Why Choose Us?</h3>
            <Choose />
            <RegisterButton />
          </div>
        </div>
        {/* NAVIGATE */}
        <div className="w-full flex-col justify-items-center">
          <h3 className="text-(--light-blue)">Navigate Our App in 5 Clicks</h3>
          <Navigate />
          <div className="flex flex-row">
              <img className="w-40 object-contain m-3 rounded-lg" src="/google-play.jpg"/>
              <img className="w-40 object-contain m-3 rounded-lg" src="/app-store.jpg"/>
          </div>
        </div>
        {/* FORM */}
        <div className="relative w-full h-160 flex-col justify-items-center mt-32">
          <img className="w-full max-h-full object-cover object-top" src="/bg-3.png"/>
          <div className="absolute w-full h-1/2 top-40 justify-items-center">
            <h3 className="text-(--light-blue) m-6">Enquire Now</h3>
            <Form />
          </div>
        </div>
      </main>
    </div>
  );
}
