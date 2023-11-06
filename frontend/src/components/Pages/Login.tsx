const Login = () => {
  return (
    <div className="login-page">
      <div className="container">
        <div className="col-md-12">
          <div className="row form">
            <div className="col-md-6 login-form">
              <form>
                <div className="school-logo">
                  <img src="images/school-logo.png" />
                </div>
                <div className="form-floating mb-3 mt-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  <label>Email</label>
                </div>
                <div className="form-floating mt-3 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="pwd"
                    placeholder="Enter password"
                    name="pswd"
                  />
                  <label>Password</label>
                </div>
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </form>
            </div>
            <div className="col-md-6 form-image">
              <form>
                <div className="image mb-3">
                  <img src="images/management.png" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
