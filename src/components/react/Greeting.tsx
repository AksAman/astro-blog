import React from "react";
import { Button } from "./ui/button";
interface GreetingProps {
  messages: string[];
}

const Greeting: React.FC<GreetingProps> = ({ messages }) => {
  console.log(import.meta.env);
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = React.useState(messages[0]);

  const greet = () => {
    console.log("greet");
    setGreeting(randomMessage());
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 pt-2">
      <h3>{greeting}! Thank you for visiting!</h3>

      <Button onClick={greet}>Greet</Button>
    </div>
  );
};

export default Greeting;
