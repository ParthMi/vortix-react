import React from 'react'
import { NavLink } from 'react-router-dom'
import Breadcrumb from '../../components/common/Breadcrumb'

const Products = () => {

  const products = [
    {
      id: 1,
      name: 'Coconut Shell Activated Carbon',
      href: '/products/Coconut-Shell-Activated-Carbon',
      imageSrc: '/images/products/coconut/pic3.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Coal Activated Carbon',
      href: '/products/Coal-Activated-Carbon',
      imageSrc: '/images/products/coal/g1.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 3,
      name: 'Wood Activated Carbon',
      href: '/products/Wood-Activated-Carbon',
      imageSrc: '/images/products/wood/Wood-Activated-Carbon.webp',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 4,
      name: 'Coconut Shell Pellets Activated Carbon',
      href: '/products/Coconut-Shell-Pellets-Activated-Carbon',
      imageSrc: '/images/products/pellets-activated-carbon.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
  ]

  return (
    <>
      <Breadcrumb
        pageName="Our Products"
        mainPage=""
        description=""
      />
      <section id="about" className="container pt-8 md:pt-10 lg:pt-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 pb-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 pb-10 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <NavLink key={product.id} to={product.href} className="group">
                <div className="relative aspect-h-1 h-[250px] aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="object-cover object-center h-full group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-base text-black dark:text-white text-center">{product.name}</h3>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Products
