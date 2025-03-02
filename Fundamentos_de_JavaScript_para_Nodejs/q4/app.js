const {exec} = require("child_process");

const comand = "ps auxw | grep node";

exec(comand, (erro, stdout, stderr) => {
	if (erro) {
		console.error(`Erro ao executar o comando: ${erro.message}`);
		return;
	}

	if (stderr) {
		console.error(`stderr: ${stderr}`);
		return;
	}

  stdout.split('\n').forEach(element => {
    console.log(`${element}\n`)
  })

});
