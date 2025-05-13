import {JwtPayload} from "jsonwebtoken";

declare module "express-serve-static-core" {
	interface Request {
		user?: JwtPayload | string;
	}
}
// isso serve para poder passar user em req
// por exemplo `req.user = decoded.user;` que está no middleware/index.ts