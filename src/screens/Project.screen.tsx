import React from 'react';
import { useRouter } from 'next/router';
import ProjectItem from '../components/ProjectItem';

import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'

import {
  Container,
  Residentials,
  Inners,
  Commercials,
  List,
  Subtitle
} from './Project.styles';
import Title from '../components/Title';

function ProjectScreen() {
  const router = useRouter();

  const goesTo = () => router.push('/projetos/12345')

  return (
    <>
      <Container style={{ padding: '0 50px', paddingBottom: '50px' }}>
        <Title>Projetos</Title>
      </Container>
      <Residentials>
        <Subtitle>Residenciais</Subtitle>
        <List>
          <ProjectItem type="blank" images={[img1, img2]} title="Projeto" seeMore={goesTo} />
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
        </List>
      </Residentials>
      <Inners>
        <Container>
          <Subtitle light>Interiores</Subtitle>
          <List>
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
            <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
          </List>
        </Container>
      </Inners>
      <Commercials>
        <Subtitle>Comerciais</Subtitle>
        <List>
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
          <ProjectItem type="blank" images={[img1, img2]} title="Nome do Projeto" />
        </List>
      </Commercials>
      <br /><br />
    </>
  );
}

export default ProjectScreen;
