export default function LoginForm({ onLogin }) {
  console.log("This is a login form!");
  console.log(onLogin);
  return (
    <form method='get' 
      onSubmit={(e) => {
        e.preventDefault();
        console.log("onSubmit activated");
        onLogin(e, {
          email: email.value,
          password: password.value,
        });
      }}
    >
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        id="email"
        type="text"
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
      />
      <button type="submit">Log In</button>
    </form>
  );
}
