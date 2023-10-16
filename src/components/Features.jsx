const Features = () => {
  return (
    <section id="features">
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* image */}
          <div className="md:w-1/2">
            <img
              src="images/image-computer.png"
              alt="image computer"
              className="right-[50%] top-0 md:absolute"
            />
          </div>
          {/* items container */}
          <div className="mb-24 mt-16 flex flex-col space-y-12 text-xl md:mb-60 md:w-1/2 md:pl-16 md:text-left">
            {/* item 1*/}
            <div>
              <h3>Quick Search</h3>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application and more.
              </p>
            </div>
            {/* item 2*/}
            <div>
              <h3>iCloud Sync</h3>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* item 3*/}
            <div>
              <h3>Completely History</h3>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
