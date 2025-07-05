import { useState } from "react";

function BusinessForm({ onSubmit, disabled }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Business name is required';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Trim the values before submitting
      const trimmedData = {
        name: formData.name.trim(),
        location: formData.location.trim(),
      };
      onSubmit(trimmedData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/30 shadow-xl rounded-2xl p-8 mb-8 border border-white/20 transition-all duration-300 hover:shadow-2xl">
      <div className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-900 mb-2 flex items-center"
          >
            <svg
              className="h-4 w-4 text-blue-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Business Name
          </label>
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={disabled}
              className={`w-full px-4 py-3 bg-white/50 backdrop-blur border rounded-xl shadow-inner focus:outline-none focus:ring-2 transition-all duration-300 
                ${errors.name
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/60'}`}
              placeholder="Enter business name"
            />
            {errors.name && (
              <p className="absolute -bottom-6 left-0 text-sm text-red-600 flex items-center">
                <svg
                  className="h-4 w-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.name}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-semibold text-gray-900 mb-2 flex items-center"
          >
            <svg
              className="h-4 w-4 text-blue-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Location
          </label>
          <div className="relative">
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              disabled={disabled}
              className={`w-full px-4 py-3 bg-white/50 backdrop-blur border rounded-xl shadow-inner focus:outline-none focus:ring-2 transition-all duration-300 
                ${errors.location
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/60'}`}
              placeholder="Enter location"
            />
            {errors.location && (
              <p className="absolute -bottom-6 left-0 text-sm text-red-600 flex items-center">
                <svg
                  className="h-4 w-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                {errors.location}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={disabled}
          className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-xl font-medium shadow-lg transition-all duration-300 
            ${disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:shadow-xl hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none'
            }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default BusinessForm;
