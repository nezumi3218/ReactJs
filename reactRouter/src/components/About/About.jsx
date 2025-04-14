import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://i.pinimg.com/736x/35/38/bf/3538bf21efb95577d07416f03b7c9df3.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Hello everyone, I am Muskan and welcome to my portfolio.
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I am a frontend developer currenly learning react and upskilling my self.
                        </p>
                        <p className="mt-4 text-gray-600">
                           I am also looking for an internship in the frontend domain it intertests me and I look forward to collaborate with your company and make somehting meaningful and contribute to the cause.
                           "THANKYOU"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}