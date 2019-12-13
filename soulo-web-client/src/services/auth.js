// This service object was adapted from here:
//  https://tylermcginnis.com/react-router-protected-routes-authentication/
//
// This version was modified to use real authentication implemented
// in the backend api. It was also modified to return promises instead
// of using callbacks `cb`.

const auth = {
  isAuthenticated: false,
  emailAddress: "",
  authenticate(email, password) {
    return fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          console.log("Login Failed");
          return;
        }
        return response.json();
      })
      .then(body => {
        this.isAuthenticated = true;
        this.emailAddress = email;
        return body;
      });
  },
  signup(formData) {
    return fetch("/api/auth/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (!response.ok) {
          console.log("Registration Failed");
          return;
        }
        return response.json();
      })
      .then(body => {
        this.emailAddress = formData.email;
        this.isAuthenticated = true;
        return body;
      });
  },
  signout(cb) {
    return fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Logout Failed");
        }

        return response.json();
      })
      .then(body => {
        this.isAuthenticated = false;
        return body;
      });
  }
};

export default auth;
