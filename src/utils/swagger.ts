import { version } from "../../package.json";
import { Express, Response, Request } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from 'yamljs';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "BookStore API Docs",
      version,
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

// Load the OpenAPI specification from the openapi.yaml file
const openapiYaml = YAML.load('./src/openapi.yaml');

// Merge the loaded YAML with the existing swaggerSpec
Object.assign(swaggerSpec, openapiYaml);

function swaggerDocs(app: Express, port: number) {
  // Swagger Page
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in Json
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(`Docs available at http://localhost:${port}/docs`);
}

export default swaggerDocs;
