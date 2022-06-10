import React from 'react';

const Banner = () => {
    return (
       <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col flex lg:flex-row">
                    <img src="https://tour-with-alamin.web.app/static/media/me.6d25009cf81f61acaf5e.jpg" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Md Al Amin</h1>
                        <p class="py-6">Front End Developer</p>
                        <button class="btn btn-primary "><a className='text-white' href="https://drive.google.com/file/d/1e9d_KmlwINGp7H7enF_-mkOWv0IOCayy/view?usp=sharing">Download Resume</a></button>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default Banner;