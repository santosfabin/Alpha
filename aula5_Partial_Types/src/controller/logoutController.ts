import { Request, Response } from "express";

const logout = (req: Request, res: Response) => {
  res.cookie("session_id", "", { expires: new Date(0) });
  res.status(200).json({ success: true });
};

module.exports = { logout };