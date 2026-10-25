export default function TernaryOperator() {
  const loggedIn = true;
  // on your own
  const hour = 9;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>}
      {/* on your own */}
      {hour < 12 ? <p>Good morning</p> : <p>Good afternoon</p>}
      <hr />
    </div>
  );
}
