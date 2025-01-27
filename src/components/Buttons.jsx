// eslint-disable-next-line react/prop-types
export default function Buttons({ twClass }) {
  return (
    <div className={`button-container ${twClass}`}>
      <a
        href="#"
        className="rounded-full bg-[#1A8476] p-4 px-8 shadow-lg duration-200 hover:opacity-80"
      >
        Download for iOS
      </a>
      <a
        href="#"
        className="rounded-full bg-[#4D61FF] p-4 px-8 shadow-lg duration-200 hover:opacity-80"
      >
        Download for Mac
      </a>
    </div>
  )
}
