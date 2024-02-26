import React from 'react'

export default function ProductCard({ data }) {
    return (
        <>
            <div div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-[5rem]">
                {
                    data.map((item, index) => (
                        <article article key={index} class="group rounded-xl border-2 p-4 border-solid border-black"
                        >
                            <img
                                alt={item.id}
                                src={item.image}
                                class="h-56 w-full rounded-xl object-cover transition group-hover:grayscale-[50%]"
                            />
                            <div class="p-4">
                                <a href="#" className='flex justify-between'>
                                    <h3 class="text-lg font-medium text-gray-900">{item.category}</h3>
                                    <h3 class="text-lg font-medium text-gray-900"> Rs {item.price}</h3>

                                </a>
                                <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                    {item.description}
                                </p>
                            </div>
                        </article>
                    ))
                }
            </div>
        </>
    )
}
