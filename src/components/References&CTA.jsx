import Buttons from "./Buttons"

const References = () => {
  return (
    <>
      <section id="references">
        <div className="mx-auto my-44 flex max-w-6xl flex-col items-center justify-between space-y-16 px-10 md:flex-row md:space-y-0">
          <img src="/images/logo-google.png" alt="google logo" />
          <img src="/images/logo-ibm.png" alt="ibm logo" />
          <img src="/images/logo-microsoft.png" alt="microsoft logo" />
          <img src="/images/logo-hp.png" alt="hp logo" />
          <img
            src="/images/logo-vector-graphics.png"
            alt="vector-graphics logo"
          />
        </div>
      </section>
      <section id="bottom-cta">
        <div className="section-container my-20">
          <h2>Clipboard for iOS & MacOS</h2>
          <p className="section-content">
            Available for free on the Apple Store. Download for Mac or iOS, sync
            with the iCloud and you&apos;re ready to start adding to your
            clipboard.
          </p>

          {/* Button Container */}
          <Buttons twClass="md:mb-44" />
        </div>
      </section>
    </>
  )
}
export default References
