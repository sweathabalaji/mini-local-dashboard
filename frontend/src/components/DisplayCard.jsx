function DisplayCard({ data, onRegenerateHeadline, disabled }) {
  const { rating, reviews, headline, name, location } = data

  const handleRegenerateClick = () => {
    if (name && location) {
      onRegenerateHeadline(name, location)
    }
  }

  return (
    <div className="backdrop-blur-lg bg-white/30 shadow-xl rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <div className="p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Business Stats
            </h2>
            <p className="text-gray-600 text-sm bg-white/50 px-3 py-1 rounded-full inline-block">
              {name} • {location}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-yellow-100/70 backdrop-blur px-4 py-2 rounded-xl shadow-inner transition-all duration-300 hover:bg-yellow-100/90">
              <svg
                className="h-6 w-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.585l-6.327 3.323 1.209-7.037L.172 7.282l7.064-1.027L10 0l2.764 6.255 7.064 1.027-4.71 4.589 1.209 7.037L10 15.585z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2 font-semibold text-gray-900">
                {rating}
              </span>
              <span className="ml-2 text-sm text-gray-600 font-medium">
                ({reviews} reviews)
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white/50 backdrop-blur rounded-xl p-6 shadow-inner transition-all duration-300 hover:bg-white/60">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <svg
                className="h-5 w-5 text-blue-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
              SEO Headline
            </h3>
            <p className="text-gray-700 font-medium leading-relaxed">
              {headline}
            </p>
          </div>

          <button
            onClick={handleRegenerateClick}
            disabled={disabled || !name || !location}
            className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg transition-all duration-300 
              ${disabled || !name || !location 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:shadow-xl hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
              }`}
          >
            <div className="flex items-center justify-center">
              <svg
                className="mr-2 h-5 w-5 animate-spin-slow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                  clipRule="evenodd"
                />
              </svg>
              Regenerate Headline
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard
  