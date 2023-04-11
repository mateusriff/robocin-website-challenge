import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const config = defineConfig({
    projectId: "4hkajo7s",
    dataset: "production",
    title: "RobôCIn Website Studio",
    apiVersion: "2023-04-10",
    basePath: "/admin",
    plugins: [deskTool()],
});

export default config;