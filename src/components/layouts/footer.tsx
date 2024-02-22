import { INFOS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC<any> = () => {
    return (
        <div className="flex flex-col bg-gray-300 w-full py-100 p-10">
        <div className="flex flex-row  justify-between">
            {INFOS.map((item, index) => (
                <ul key={index} className="flex flex-col justify-between">
                    {item.map((item, index) => (
                        <li key={index} className="hover:text-white font-thin cursor-pointer">
                            <Link href='/'>{item}</Link>
                        </li>
                    ))}
                </ul>
            ))}
            <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className="cursor-pointer" />
        </div>
        <div className="flex justify-start gap-x-10 mt-10">
                <p className="font-bold ">Armenia</p>
                <p className="font-bold">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
    </div>
    )
}

export default Footer;