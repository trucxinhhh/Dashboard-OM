import { useState } from "react";

import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const postusr = async () => {
  //   try {
  //     const usr = {"username": username, "password": password, "role": role};
  //     const headers = {
  //       'accept': 'application/json',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     };
  //     const response = await axios.post("http://35.188.39.16:8083/token", usr, {headers})
  //     console.log(response.data);
  //     const token = response.data.access_token;
  //     const userResponse = await axios.get("http://35.188.39.16:8083/users/me", {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     console.log(userResponse.data);
  //   } catch (e) {
  //     console.error('Error logging in:', e);
  //   }
  // }
  const nameUser = "Truc";
  const authorityUser = "User";
  const postusr = async () => {
    console.log("User", { username }, "Role", { role });
    navigate("/home", { state: { username, role } });
  };

  return (
    // hem co ghi body zo day
    <div className="flex h-screen w-screen gradient-background">
      <div className="flex-shrink white-box">
        <div className="container">
          <h1>WELCOME</h1>
        </div>
        <div className="login_box">
          <div className="inline-flex items-center w-full text-sm font-semibold text-black transition-colors duration-150 cursor-pointer hover:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-user"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            </svg>
            <h2>Username</h2>
          </div>

          <input
            type="text"
            name="username"
            className="login_input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="truc1234"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="inline-flex items-center w-full text-sm font-semibold text-black transition-colors duration-150 cursor-pointer hover:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
              <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
              <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
            </svg>
            <h2>Password</h2>
          </div>
          <input
            type="password"
            name="password "
            className="login_input mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="inline-flex items-center w-full text-sm font-semibold text-black transition-colors duration-150 cursor-pointer hover:text-green-500"
            style={{ marginTop: 10 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shield-half"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
              <path d="M12 3v18" />
            </svg>
            <h2>Authority</h2>
          </div>
          <label className="inline-flex items-center w-full text-sm font-semibold ">
            <select
              className="text-gray-500 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1select_box"
              name="role"
              id="role"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Admin">Choice your authority</option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Others">Others</option>
            </select>
          </label>
          <button
            onClick={() => postusr()}
            className="flex-auto button_login_submit bg-green-500 transition-colors duration-150 cursor-pointer hover:bg-green-900 text-cyan-50 font-bold"
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
