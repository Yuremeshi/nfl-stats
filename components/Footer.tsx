import { socials } from '@/constants'
import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-5 px-10 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
      <p className="text-gray-500 lg:block">
        &copy;{new Date().getFullYear()}. All rights reserved.
      </p>

      <ul className="flex gap-5 flex-wrap">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-full transition-colors hover:bg-gray-800">
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        ))}
      </ul>
    </div>
  )
}

export default Footer