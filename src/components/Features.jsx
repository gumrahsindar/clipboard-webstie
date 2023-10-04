const Features = () => {
  return (
    <section id='features'>
      <div className='section-container my-20'>
        <div className='relative flex flex-col md:flex-row md:space-x-32'>
          {/* image */}
          <div className='md:w-1/2'>
            <img
              src='images/image-computer.png'
              alt='image computer'
              className='md:absolute top-0 right-[50%]'
            />
          </div>
          {/* items container */}
          <div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:mb-60 md:text-left md:pl-16 md:w-1/2'>
            {/* item 1*/}
            <div>
              <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
                Quick Search
              </h5>
              <p className='max-w-md text-grayishBlue'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vitae.
              </p>
            </div>
            {/* item 2*/}
            <div>
              <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
                iCloud Sync
              </h5>
              <p className='max-w-md text-grayishBlue'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vitae.
              </p>
            </div>
            {/* item 3*/}
            <div>
              <h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
                Completely History
              </h5>
              <p className='max-w-md text-grayishBlue'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
