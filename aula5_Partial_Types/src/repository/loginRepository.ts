import pool from "../database/connection";

const getUserData = async (email: string) => {
	try {
		const query = "SELECT * FROM users WHERE email = $1";
		const {
			rows: [user]
		} = await pool.query(query, [email]);

		return user;
	} catch (error) {
		throw error;
	}
};

module.exports = {getUserData};
