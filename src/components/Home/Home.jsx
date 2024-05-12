import React from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
  return (
      <div className="mx-auto w-full max-w-7xl">
          <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
              <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                      <h2 className="text-4xl font-bold sm:text-5xl">
                          Github Profile
                          <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
                      </h2>

                      <Link
                          className="inline-flex text-white items-center px-7 py-1 font-medium text-2xl bg-orange-700 rounded-lg hover:opacity-75"
                          to="https://github.com/asadd2723" target='_blank'
                      >
                        <svg className='w-12 h-12 mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
                            </svg>
                             Github
                      </Link>
                  </div>
              </div>

              <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                  <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
              </div>
          </aside>

          <div className="grid  place-items-center sm:mt-20">
              <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
          </div>

          <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
      </div>
  );
}
