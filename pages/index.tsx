import { Home } from "../src";

export async function getServerSideProps() {
  const response = await fetch("https://vitrinniapi.herokuapp.com/api/home");
  const { title, text } = await response.json()

  const projects = await fetch("https://vitrinniapi.herokuapp.com/api/projects?highlight=true");
  const highlights = await projects.json()

  return {
    props: { title, text, highlights }
  };
};

export default function Main({ title, text, highlights }) {
  return (
    <Home title={title} text={text} highlights={highlights} />
  )
}