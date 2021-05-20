import { Container, Img, ImgShadow, Title } from './styles';

interface ProjectItemProps {
  images: string[];
  title: string;
  inverted?: boolean;
}

function ProjectItem({ images, title, inverted = false }: ProjectItemProps) {
  return (
    <Container inverted={inverted}>
      <Img img={images[0]} overlay={images[1]} />
      <ImgShadow inverted={inverted} />
      <Title>{title}</Title>
    </Container>
  );
};

export default ProjectItem;
