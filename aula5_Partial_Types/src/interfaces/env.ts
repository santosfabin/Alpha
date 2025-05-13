export interface IConfig {
	NODE_ENV: "development" | "production" | "test";
	HOSTNAME: string;
	PORT: number;
	SECRET_KEY: string;
	DB_HOST: string;
	DB_USER: string;
	DB_PASSWORD: string;
	DB_NAME: string;
	DB_PORT: number;
}
