"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"

export default function Form() {
    const [countries, setCountries ] = useState(null);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(results => results.json())
            .then(data => data.map(obj => obj.name.common))
            .then(names => names.sort())
            .then(sorted => setCountries(sorted))
            .catch(error => console.log(error));
      }, []);
  
    return (
        <form className="w-full flex flex-col items-center px-32 gap-4" onSubmit={handleSubmit(onSubmit)}>
            <section className="w-full flex gap-4">
                <input className="grow border-1 border-[#ffffff50] rounded-sm p-4" title="Name" placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input className="grow border-1 border-[#ffffff50] rounded-sm p-4" title="Email" placeholder="Email" type="email" {...register("email", { required: true})} />
            </section>
            <section className="w-full flex gap-4">
                <input className="grow border-1 border-[#ffffff50] rounded-sm p-4" title="Mobile Number" placeholder="Mobile No." type="tel" {...register("number", { required: true })} />
                <select className="grow border-1 border-[#ffffff50] rounded-sm p-4" placeholder="Country of Residence" {...register("country", { required: true})}>
                    {countries && countries.map(country =><option key={country} className="text-black" value={country}>{country}</option>
                    )}
                </select>
            </section>
            <textarea className="w-full border-1 border-[#ffffff50] rounded-sm p-4" rows={5} placeholder="Enter your message here" {...register("message", { required: true, maxLength: 300})}/>
            <input className="bg-(--orange) py-2 px-6 rounded-md shadow-md hover:opacity-70" type="submit" />
      </form>
    )
}