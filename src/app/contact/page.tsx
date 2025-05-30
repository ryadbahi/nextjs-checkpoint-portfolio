function contact() {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 mt-1 border rounded text-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border rounded text-black"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 mt-1 border rounded text-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-indigo-700 font-bold py-2 px-4 rounded hover:bg-indigo-100 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
export default contact;
