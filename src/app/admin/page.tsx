import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="max-w-md mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">User Information</h2>
          <form>
              <div className="mb-4">
                  <label htmlFor="first_name" className="block text-sm font-medium text-zinc-700">First Name</label>
                  <input type="text" id="first_name" name="first_name" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" placeholder="John" required></input>
              </div>
              <div className="mb-4">
                  <label htmlFor="last_name" className="block text-sm font-medium text-zinc-700">Last Name</label>
                  <input type="text" id="last_name" name="last_name" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" placeholder="Doe" required></input>
              </div>
              <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" placeholder="john.doe@example.com" required></input>
              </div>
              <div className="mb-4">
                  <label htmlFor="mobile" className="block text-sm font-medium text-zinc-700">Mobile Number</label>
                  <input type="tel" id="mobile" name="mobile" className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500" placeholder="123-456-7890" required></input>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500">Submit</button>
          </form>
      </div>
  );
}