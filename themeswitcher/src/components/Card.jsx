import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="https://avatars.githubusercontent.com/u/152357082?v=4" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Kisuke Urahara  is the former captain of the 12th Division
                    </h5>
                </a>
                                <div className="flex items-center mt-7 justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">12 Division</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Captain
                    </a>
                </div>
            </div>
        </div>
    );
}



