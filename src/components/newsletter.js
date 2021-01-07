import React from 'react';

export default function Newsletter() {
    const borderStyle = 'border-0 border-black border-solid border-b'
    return (
        <div className={`h-32 flex ${borderStyle}`}>
            <div className='flex flex-1 flex-col justify-center items-center text-sm'>
                <div>加入我們的 Newsletter 一起發現更多最新故事吧！</div>
                <div className={`w-1/3 flex ${borderStyle}`}>
                    <input type="text" name="price" id="price" className="flex-1 pl-2 pr-12 border-0 focus:outline-none" placeholder="Your email" />
                    <button type="button" className="border-0 bg-white cursor-pointer">JOIN</button>
                </div>
            </div>
        </div>
    )
}
