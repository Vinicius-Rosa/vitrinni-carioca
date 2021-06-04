import { Home } from "../src";

export async function getServerSideProps() {
  const response = await fetch("https://vitrinniapi.herokuapp.com/api/home");
  const { title, text } = await response.json()

  return {
    props: { title, text }
  };
};

export default function Main({ title, text }) {
  return (
    <Home title={title} text={text} />
  )
}