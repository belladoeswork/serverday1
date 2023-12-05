
import Titles from "@/components/Titles.jsx";
import Dogs from "@/components/Dogs.jsx";
import Memes from "@/components/Memes.jsx";
import Pokemon from "@/components/Pokemon.jsx";
import Beer from "@/components/Beer.jsx";

export default function Home() {
  return (
    <div>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <Titles section="memes" />
      <Memes />
      <Titles section="Pokemon" />
      <Pokemon />
      <Titles section="Beer" />
      <Beer />
    </div>
  )
}
