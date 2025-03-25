import Image from "next/image";
import RegisterButton from '@/components/RegisterButton';

export default function NavBar() {
    return (
        <div className="fixed w-full h-20 z-1 content-center px-30 bg-[#112a4e] z-3">
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <Image
                    src="/logo.png"
                    alt="Blackwell logo"
                    style={{ objectFit: "contain" }}
                    width={180}
                    height={38}
                        />
                </div>
                <p className="flex-1 text-center font-(family-name:--font-secondary)">PROMOTION <br/> ENDS IN</p>
                <div className="flex-2 flex items-center justify-center">
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-4xl">27</p>
                        <p>Days</p>
                    </div>
                    <p>:</p>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-4xl">23</p>
                        <p>Hours</p>
                    </div>
                    <p>:</p>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-4xl">45</p>
                        <p>Minutes</p>
                    </div>
                    <p>:</p>
                    <div className="flex-1 flex flex-col items-center">
                        <p className="text-4xl">7</p>
                        <p>Seconds</p>
                    </div>
                </div>
                <div className="flex-1"></div>
                <div className="flex-1">
                    <RegisterButton circle/>
                </div>
            </div>
      </div>
  )
}
