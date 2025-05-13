import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";
import config from "../config";
const verifyActiveSession = (
	req: Request,
	res: Response,
	next: NextFunction
): Response | void => {
	const sessionToken = req.cookies.session_id;

	if (!sessionToken) {
		return res.status(400).json({error: "Token de sessão inválido"});
	}

	jwt.verify(
		sessionToken,
		config.SECRET_KEY,
		(error: jwt.JsonWebTokenError | null, decoded: any) => {
			if (error) {
				res.cookie("session_id", "", {expires: new Date(0)});
				return res.status(404).json({error: "Sessão inválida"});
			} else {
        (req as any).user = decoded.user;

				next();
			}
		}
	);
};

export {verifyActiveSession};
