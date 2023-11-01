export default function LoginForm({ onLogin }) {


  return (
    <form action='post'
      onSubmit={(e) => {
        onLogin(e, {
          email: emailValue,
          password: passwordValue,
        });
      }}
    >
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        id="email"
        type="text"
        required
        onChange={(e) => setEmailValue(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        name="password"
        id="password"
        type="password"
        required
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button type="submit">Log In</button>
    </form>
  );
}
