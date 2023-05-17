import Express  from "express";
import { engine } from "express-handlebars";
import { __dirname } from "../../utils";

const server = express();
///seting template
server.engine("handlebars", engine());

