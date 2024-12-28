import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from 'antd';

const Login = () => {
  const navigate = useNavigate();  // For navigation after successful login
  const [values, setValues] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [alert, setAlert] = useState({
    message: "",
    description: "",
    type: "",
  });

  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    const loginData = new URLSearchParams({
      email: values.email,
      password: values.password,
    }).toString();

    try {
      const response = await fetch(`https://navrang.mvd-tech.io/API/login_api.php?${loginData}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();
      console.log(result);

      // Check if login is successful
      if (result.message === 'Success' && result.status) {
        if (result.token) {
          localStorage.setItem('authToken', result.token);
          // Set success alert
          setAlert({
            message: "Login Successful",
            description: "Welcome back!",
            type: "success",
          });
          setTimeout(()=>{
            navigate("/home");
          },1500)
          
        } else {
          setAlert({
            message: "Error",
            description: "No token received.",
            type: "error",
          });
        }
      } else {
        setAlert({
          message: "Login Failed",
          description: result.message || "An unknown error occurred.",
          type: "error",
        });
      }
    } catch (error) {
      setAlert({
        message: "Error",
        description: "Something went wrong. Please try again later.",
        type: "error",
      });
      console.error(error);
    }
  };

  // Handle changes in the form fields
  const onChangeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="text-blue-600 text-3xl">BitWize</div>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 text-center">
            Sign in to your account
          </h2>

          <form className="space-y-6" onSubmit={onSubmitHandler}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChangeHandler}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChangeHandler}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={values.rememberMe}
                  onChange={onChangeHandler}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
                <label className="ml-2 text-sm text-gray-600">Remember me</label>
              </div>
              <a className="text-sm text-blue-600 hover:text-blue-500" href="#">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Sign in
            </button>
          </form>
          {/* Conditional rendering of the alert message */}
      {alert.message && (
        <Alert
          className="mt-5"
          message={alert.message}
          description={alert.description}
          type={alert.type}
          showIcon
        />
      )}

          {/* <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                <span className="ml-2">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                  />
                </svg>
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>*/}
        </div> 

        {/* <div className="mt-8 text-center">
          <span className="text-sm text-gray-500">Not a member? </span>
          <a className="text-sm text-blue-600 hover:text-blue-500" href="#">
            Start a 14 day free trial
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
