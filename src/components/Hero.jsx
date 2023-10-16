const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container mb-40  pt-16">
        <img src="images/logo.svg" alt="" className="mx-auto my-16" />
        <h1 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          A history of everything you copy
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          enim. Fugit est quam non, asperiores laudantium esse culpa? Non,
          consectetur.
        </p>
        {/* button container */}
        <div className="button-container">
          <a
            href="#"
            className="rounded-full bg-strongCyan p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="rounded-full bg-lightBlue p-4 px-8 shadow-lg duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>
  )
}
export default Hero
