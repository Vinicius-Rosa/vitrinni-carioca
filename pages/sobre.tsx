import About from '../src/screens/About.screen';

export async function getServerSideProps() {
    const response = await fetch("https://vitrinniapi.herokuapp.com/api/about");
    const { text } = await response.json();

    return {
        props: { text }
    };
};

const Sobre = props => <About {...props} />

export default Sobre;
