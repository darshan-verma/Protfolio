import React, { useState } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "1396288b-810f-43dc-8c11-0e1ac0ebfa85"); // Replace with your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Thanks for reaching out! 🎉");
        e.target.reset();
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("An error occurred. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-yellow-600 dark:text-yellow-400 font-semibold">Contact Me</h3>
      {/* <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 w-full text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 w-full text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-yellow-500 text-gray-900 dark:bg-yellow-600 dark:text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 dark:hover:bg-yellow-500 transition duration-300"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form> */}
<form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 w-full !important text-gray-900 dark:text-white !important border border-gray-300 dark:border-gray-700 !important focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600"
  />
  <textarea
    name="message"
    placeholder="Your Message"
    required
    className="bg-white dark:bg-gray-800 rounded-lg px-4 py-2 w-full !important text-gray-900 dark:text-white !important border border-gray-300 dark:border-gray-700 !important focus:ring-2 focus:ring-yellow-500 dark:focus:ring-yellow-600"
  />
  <button
    type="submit"
    disabled={isLoading}
    className="bg-yellow-500 dark:bg-yellow-600 text-gray-900 dark:text-white px-6 py-2 rounded-lg font-medium hover:bg-yellow-600 dark:hover:bg-yellow-500 transition duration-300"
  >
    {isLoading ? "Sending..." : "Send"}
  </button>
</form>

      {statusMessage && (
        <p className="text-sm text-green-500 dark:text-green-400 mt-2">{statusMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
