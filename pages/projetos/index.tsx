import Project from '../../src/screens/Project.screen';

export async function getServerSideProps() {
    const response = await fetch("https://vitrinniapi.herokuapp.com/api/categories");
    const [inner, residential, commercial] = await response.json();

    return {
        props: { inner, residential, commercial }
    };
};

const Projetos = props => <Project {...props} />

export default Projetos;
