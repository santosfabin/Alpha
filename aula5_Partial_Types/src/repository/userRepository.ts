import pool from "../database/connection";

const createUserSql = async (name: string, email: string, password: string) => {
	try {
		const result = await pool.query(
			"INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
			[name, email, password]
		);
		return result.rows;
	} catch (e) {
		console.error(e);
		return null;
	}
};

const updateUserSql = async (id: number, updatedFields: any) => {
	try {
		// Verificar se o usuário existe
		const userCheckQuery = "SELECT * FROM users WHERE id = $1";
		const userCheckResult = await pool.query(userCheckQuery, [id]);

		if (userCheckResult.rowCount === 0) {
			console.error("Usuário não encontrado.");
			return {error: "Usuário não encontrado."};
		}

		// Construção da parte SET da query de forma manual
		let setClause = "";
		const values: any[] = [];
		let valueIndex = 1;

		// Verificar se 'name' foi enviado e se existe no banco
		if (updatedFields.name) {
			setClause += `name = $${valueIndex}, `;
			values.push(updatedFields.name);
			valueIndex++;
		}

		// Verificar se 'email' foi enviado e se existe no banco
		if (updatedFields.email) {
			setClause += `email = $${valueIndex}, `;
			values.push(updatedFields.email);
			valueIndex++;
		}

		// Verificar se 'password' foi enviado e se existe no banco
		if (updatedFields.password) {
			setClause += `password = $${valueIndex}, `;
			values.push(updatedFields.password);
			valueIndex++;
		}

		// Se nenhum campo foi enviado para atualizar, retornamos um erro
		if (!setClause) {
			console.error("Nenhum campo para atualizar.");
			return {error: "Nenhum campo para atualizar."};
		}

		// Remover a vírgula extra no final da parte SET
		setClause = setClause.slice(0, -2);

		// Adicionar o ID para a query
		values.push(id);
		const query = `UPDATE users SET ${setClause} WHERE id = $${valueIndex} RETURNING *`;

		// Executando a query
		const result = await pool.query(query, values);

		// Verificando o resultado da query
		if (result.rowCount === 0) {
			console.error("Erro ao atualizar usuário.");
			return {error: "Erro ao atualizar usuário."};
		}

		return result.rows;
	} catch (e) {
		console.error("Erro no banco de dados:", e);
		return {error: "Erro ao atualizar usuário."};
	}
};

const removeUserSql = async (id: number) => {
	try {
		const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
		return result.rows;
	} catch (e) {
		console.error(e);
		return null;
	}
};

const showAllUsersSql = async () => {
	try {
		const result = await pool.query("SELECT * FROM users");
		return result.rows;
	} catch (e) {
		console.error(e);
		return null;
	}
};

module.exports = {createUserSql, updateUserSql, removeUserSql, showAllUsersSql};
