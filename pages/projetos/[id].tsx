import ProjectDetails from '../../src/screens/ProjectDetails.screen';

export async function getServerSideProps({ query: { id } }) {
    const response = await fetch(`https://vitrinniapi.herokuapp.com/api/projects/${id}`);
    const project = await response.json()

    return {
        props: { ...project, category: project.category.name }
    };
};

const Projetos = props => <ProjectDetails {...props} />

export default Projetos;
