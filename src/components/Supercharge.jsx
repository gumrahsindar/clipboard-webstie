const Supercharge = () => {
  return (
    <section id="supercharge">
      <div className="section-container my-20">
        <h2>Supercharge your workflow</h2>
        <p className="section-content mb-16">
          We&apos;ve got the tools to boost your productivity.
        </p>
        {/* Items Container */}
        <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
          {/* Item 1 */}
          <div className="flex flex-col items-center space-y-5">
            <img
              className="mb-6"
              src="/images/icon-blacklist.svg"
              alt="blacklist item"
            />
            <h3>Create Blacklist</h3>
            <p className="max-w-md text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application and more.
            </p>
          </div>
          {/* Item 2 */}
          <div className="flex flex-col items-center space-y-5">
            <img
              className="mb-6"
              src="/images/icon-text.svg"
              alt="blacklist item"
            />
            <h3>Plain Text Snippets</h3>
            <p className="max-w-md text-grayishBlue">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          {/* Item 3 */}
          <div className="flex flex-col items-center space-y-5">
            <img
              className="mb-6"
              src="/images/icon-preview.svg"
              alt="blacklist item"
            />
            <h3>Sneak Preview</h3>
            <p className="max-w-md text-grayishBlue">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Supercharge
