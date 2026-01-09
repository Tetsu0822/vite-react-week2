const API_BASE = import.meta.env.VITE_API_BASE;
const API_PATH = import.meta.env.VITE_API_PATH;
const {formData, setFormData} = useState({
    username: "example@gmail.com",
    password: ""
  });
  const {isAuth, setIsAuth} = useState(false);

export default function Home() {

  return (
    <>
      {isAuth ? (
        <div className="container login">
        <h1>請先登入</h1>
        <form className="form-floating">
          <div class="form-floating mb-3">
            <input type="text" className="form-control" name="username" placeholder="username"

          />
            <label htmlFor="username">Username</label>
          </div>
          <div class="form-floating">
            <input type="password" className="form-control" name="password" placeholder="Password"

          />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">登入</button>
        </form>
      </div>
      ) : (
        <div className="container">已登入</div>
      )}
    </>

  )
}