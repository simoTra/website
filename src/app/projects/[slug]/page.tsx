import { Container } from "@/components/Container";
import { SingleProject } from "@/components/Project";
import { projects } from "@/constants/projects";
import { Project } from "@/types/project";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug) as Project | undefined;
  if (project) {
    return {
      title: project.title,
      description: project.description,
    };
  } else {
    return {
      title: "Projects | Simone Traversi",
      description:
        "Simone Traversi is a technology enthusiast in all its forms. He loves combining software and hardware to create innovative solutions.",
    };
  }
}

export default async function SingleProjectPage(
  props: {
    params: Promise<{ slug: string }>;
  }
) {
  const params = await props.params;
  const slug = params.slug;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    redirect("/projects");
  }
  return (
    <Container>
      <SingleProject project={project} />
    </Container>
  );
}
