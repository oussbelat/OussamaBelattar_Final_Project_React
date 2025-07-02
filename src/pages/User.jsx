import React, { useState } from "react";
import { Link } from "react-router-dom";

const User = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const submitLogin = (event) => {
    event.preventDefault();
    console.log("Logging in with:", { userEmail, userPassword });
  };

  const goToRegister = () => {
    console.log("Redirecting to registration page");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
      <section className="container max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
       
      
        <article className="bg-white p-8 rounded-lg shadow-sm flex flex-col gap-4">
          <header>
            <h2 className="text-3xl font-semibold mb-2">New customer</h2>
            
          </header>
          <p className="text-gray-500 mb-6 leading-relaxed">
            By creating an account you will be able to shop faster, be up to date on an order's status,
            and keep track of the orders you have previously made.
          </p>
          <button
            type="button"
            onClick={goToRegister}
            className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
          >
            CONTINUE
          </button>
        </article>

     
        <article className="bg-white p-8 rounded-lg shadow-sm">
          <header>
            <h2 className="text-3xl font-semibold mb-2">Returning Customer</h2>
            <p className="text-gray-600 mb-6">I am a returning customer.</p>
          </header>

          <form onSubmit={submitLogin} noValidate>
            <div className="mb-4">
              <label
                htmlFor="user-email"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="user-email"
                name="user-email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="user-password"
                className="block text-gray-700 mb-2 font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="user-password"
                name="user-password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
                autoComplete="current-password"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>

            <div className="mb-6">
              <Link
                to="/forgot-password"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Forgot your password?
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors"
              >
                SIGN IN
              </button>
              <span className="text-gray-500">or</span>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Return to Store
              </Link>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
};

export default User;
