import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("ali");
  const [age, setAge] = useState(27);
  const handleClick = () => {
    if (name === "ali" && age === 27) {
      setName("muzy");
      setAge(39);
    } else {
      setName("ali");
      setAge(27);
    }
  };

  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <button onClick={handleClick}>Click me</button>
      <p>
        {name} is {age}
      </p>
    </div>
  );
};

export default HomePage;
