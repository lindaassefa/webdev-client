export default function Destructing() {
  // on your own
  const person = { name: "John", age: 25, city: "Boston" };
  const { name, age, city } = person;
  const numbers = ["one", "two", "three", "four"];
  const [first, second, third, fourth] = numbers;
  // with AI
  return (
    <div id="wd-destructing">
      <h2>Destructing</h2>
      <h3>Object Destructing</h3>
      const {"{ name, age }"} = {'{ name: "John", age: 25 }'} <br /> <br />
      name = {name} <br />
      age = {age} <br />
      {/* on your own */}
      city = {city}
      <h3>Array Destructing</h3>
      const {"[first, second, third, fourth]"} = {'["one","two","three","four"]'}{" "}
      <br /> <br />
      first = {first} <br />
      second = {second} <br />
      third = {third} <br />
      {/* on your own */}
      fourth = {fourth}
      {/* with AI */}
      <hr />
    </div>
  );
}
