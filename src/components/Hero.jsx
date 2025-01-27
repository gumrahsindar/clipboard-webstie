import Buttons from "./Buttons"

const Hero = () => {
  return (
    <section id="hero">
      <div className="section-container mb-40  pt-16">
        <img src="images/logo.svg" alt="" className="mx-auto my-16" />
        <h1 className="mb-8 text-4xl font-bold text-darkGrayishBlue md:text-5xl">
          A history of everything you copy
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-grayishBlue">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        {/* button container */}
        <Buttons />
      </div>
    </section>
  )
}
export default Hero
