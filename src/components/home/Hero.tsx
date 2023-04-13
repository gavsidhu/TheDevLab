import axios from 'axios'
import React, { useState } from 'react'

const Hero = () => {
    const [email, setEmail] = useState("")

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.currentTarget.value)
    }

    const handleClick = async () => {
        const data = {
            "contacts": [
              {
                "email": email,
              }
            ]
          };
        await axios.post("/api/contacts", data)
    }
    return (
        <div>
            <div className="relative isolate overflow-hidden bg-inherit">
                <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:flex lg:items-center  lg:px-8">
                    <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:pt-8">
                        <h1 className="mt-10 text-4xl font-heading font-bold tracking-tight text-white sm:text-7xl">
                            Stay Ahead of the Curve
                        </h1>
                        <p className="mt-6 text-xl leading-8 font-body text-gray-300">
                            Join a community of developers to learn, experiment and innovate with new technology so you can build better products.
                        </p>
                        <div className="mt-6 flex max-w-md gap-x-4">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                onChange={onChange}
                                className="min-w-0 flex-auto rounded-md border border-white bg-transparent px-3.5 py-2 text-white shadow-sm focus:outline-none sm:text-sm sm:leading-6"
                                placeholder="Email address"
                            />
                            <button
                                type="submit"
                                onClick={handleClick}
                                className="flex-none rounded-md bg-[#C2F7B0] py-2.5 px-3.5 font-semibold text-[#0C1E3E] shadow-sm hover:bg-[#A5D5A5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Join Free
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="mx-auto flex-none w-full">
                            <img
                                className='mx-auto w-full'
                                src="/images/home/robot-scientist.png"
                                alt="Robot mad scientist"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero