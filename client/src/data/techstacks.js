import projects from './projects.json';

const techStacks = [];

for (const project of projects) {
  for (const tech of project.techstack) {
    !techStacks.includes(tech) && techStacks.push(tech);
  }
}

export default techStacks;
