import dotenv from "dotenv";
// Lê o arquivo .env na raiz do projeto e adiciona suas variáveis ao objeto process.env
dotenv.config();

import {IConfig} from "../interfaces/env";

// Garante que a variável de ambiente realmente existe.
function getEnvVar(name: string): string {
	const value = process.env[name];
	if (!value) throw new Error(`Missing environment variable: ${name}`);
	return value;
}

const config: IConfig = {
	NODE_ENV: getEnvVar("NODE_ENV") as "development", // Você está dizendo ao TypeScript: "Confia em mim, essa variável é essa opção"
	HOSTNAME: getEnvVar("HOSTNAME"),
	PORT: Number(getEnvVar("PORT")),
	SECRET_KEY: getEnvVar("SECRET_KEY"),
	DB_HOST: getEnvVar("DB_HOST"),
	DB_USER: getEnvVar("DB_USER"),
	DB_PASSWORD: getEnvVar("DB_PASSWORD"),
	DB_NAME: getEnvVar("DB_NAME"),
	DB_PORT: Number(getEnvVar("DB_PORT"))
};

export default config;
