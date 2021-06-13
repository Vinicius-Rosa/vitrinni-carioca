import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import ProjectItem from '../components/ProjectItem';

import {
  Container,
  Residentials,
  Inners,
  Commercials,
  List,
  Subtitle
} from './Project.styles';

import Title from '../components/Title';

interface IProject {
  id: number;
  title: string;
  desc: string;
  local: string;
  date: string;
  highlight?: number | boolean;
  category_id: number;
  created_at?: string;
  updated_at?: string;
  area: number;
  project_images: [];
}

interface ICategory {
  id: number | string;
  name: string;
  created_at?: string;
  updated_at?: string;
  projects: IProject[];
}

interface ProjectProps {
  inner: ICategory;
  residential: ICategory;
  commercial: ICategory;
}

function ProjectScreen({ inner, residential, commercial }: ProjectProps) {
  const router = useRouter();

  const goesTo = id => router.push(`/projetos/${id}`)

  const getImages = useCallback(images => images.length > 0 ? [images[0], images[1]] : [], [])

  return (
    <>
      <Container style={{ padding: '0 50px', paddingBottom: '50px' }}>
        <Title>Projetos</Title>
      </Container>
      <Residentials>
        <Subtitle>Residenciais</Subtitle>
        <List>
          {residential?.projects.map((project, i) => <ProjectItem
            key={i}
            type="blank"
            images={getImages(project.project_images)}
            title={project.title}
            seeMore={() => goesTo(project.id)}
          />)}
        </List>
      </Residentials>
      <Inners>
        <Container>
          <Subtitle light>Interiores</Subtitle>
          <List>
            {inner?.projects.map((project, i) => <ProjectItem
              key={i}
              type="blank"
              images={getImages(project.project_images)}
              title={project.title}
              seeMore={() => goesTo(project.id)}
            />)}
          </List>
        </Container>
      </Inners>
      <Commercials>
        <Subtitle>Comerciais</Subtitle>
        <List>
          {commercial?.projects.map((project, i) => <ProjectItem
            key={i}
            type="blank"
            images={getImages(project.project_images)}
            title={project.title}
            seeMore={() => goesTo(project.id)}
          />)}
        </List>
      </Commercials>
      <br /><br />
    </>
  );
}

export default ProjectScreen;
