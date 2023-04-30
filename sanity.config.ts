import schemas from '@/sanity/schemas';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "4hkajo7s",
    dataset: "production",
    title: "RobôCIn Admin",
    apiVersion: "2023-04-10",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});

export default config;