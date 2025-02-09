import os        # Manipulação de arquivos e diretórios.
import time      # Medição de tempo para calcular desempenho.
import zipfile   # Compressão e descompressão de arquivos ZIP.
import gzip      # Compressão e descompressão de arquivos GZIP.
import bz2       # Compressão e descompressão de arquivos BZ2.
import lzma      # Compressão e descompressão de arquivos LZMA.
import shutil    # Operações de cópia e movimentação de arquivos.

def compress_file(file_path, method, output_dir):
    # file_path: Caminho (completo, relativo ou somente o nome do arquivo) do arquivo original que será compactado + nome do arquivo.
    # method: Método de compressão a ser usado (zip, gzip, bz2, lzma).
    # output_dir: Diretório onde o arquivo compactado será salvo.
    
    compressed_file = os.path.join(output_dir, f"{method}_{os.path.basename(file_path)}")
    # os.path.basename(file_path): Obtém apenas o nome do arquivo (sem o diretório).
        # junto com o f"..." ele cria o nome do arquivo por exemplo: "zip_arquivo.txt"
    # A função os.path.join() é usada para combinar partes de um caminho de arquivo de maneira segura e independente do sistema operacional.
    # os.path.join(output_dir, ...): Cria o caminho completo do novo arquivo compactado.
        # Se output_dir = "/home/user/output" e o restante do caminho for "arquivo.txt", o resultado será: "/home/user/output/arquivo.txt"
    start_time = time.time()
    # Guarda o tempo inicial para medir o tempo de compressão.
    # esse tempo em em timestump
    
    if method == "zip":
        with zipfile.ZipFile(compressed_file, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # compressed_file = "/home/user/backup/arquivos.zip"
            # file_path = "/home/user/documents/relatorio.pdf"
            
            # O with é um gerenciador de contexto em Python. Ele garante que o arquivo ZIP seja fechado corretamente após o bloco de código ser executado, mesmo que ocorra uma exceção.
            
            # compressed_file: O caminho (path) onde o arquivo ZIP será criado.
            
            # 'w': Modo de abertura do arquivo. O modo 'w' significa write (escrita). Se o arquivo já existir, ele será sobrescrito. Se não existir, será criado.
            
            # zipfile.ZIP_DEFLATED: Especifica o método de compressão. ZIP_DEFLATED usa o algoritmo DEFLATE para comprimir os arquivos dentro do ZIP.
            
            # Cria ou abre um arquivo ZIP no caminho especificado por compressed_file.
            
            zipf.write(file_path, os.path.basename(file_path))
            # zipf.write: Adiciona um arquivo ao ZIP, usando o nome base do arquivo original.
            # file_path: O caminho completo do arquivo que será adicionado ao ZIP.
            # os.path.basename(file_path): Extrai apenas o nome do arquivo (com extensão) do caminho completo. Isso define como o arquivo será nomeado dentro do ZIP.
    elif method == "gzip":
    # Abre o arquivo compactado no modo escrita binária ('wb').
    # 'wb' significa "write binary" (escrita em binário), necessário para criar arquivos gzip.
        with gzip.open(compressed_file, 'wb') as gz:
            
            # Abre o arquivo original no modo leitura binária ('rb').
            # 'rb' significa "read binary" (leitura em binário), necessário para ler o conteúdo do arquivo.
            with open(file_path, 'rb') as f:
                
                # Copia o conteúdo do arquivo original (f) para o arquivo compactado (gz).
                # Isso é feito de forma eficiente, sem carregar todo o conteúdo na memória de uma vez.
                shutil.copyfileobj(f, gz)
    
    # Os métodos bz2 e lzma seguem a mesma lógica, mas usam suas respectivas bibliotecas.
    elif method == "bz2":
        with bz2.BZ2File(compressed_file, 'wb') as bz:
            with open(file_path, 'rb') as f:
                shutil.copyfileobj(f, bz)
    elif method == "lzma":
        with lzma.open(compressed_file, 'wb') as lz:
            with open(file_path, 'rb') as f:
                shutil.copyfileobj(f, lz)
                
                
    # Calcula o tempo de compressão em segundos.
    # Subtrai o tempo atual (time.time()) do tempo inicial (start_time).
    compression_time = time.time() - start_time
    # compression_time = 2.3057492 (2,3057492 segundos)

    # Obtém o tamanho do arquivo compactado em bytes.
    # os.path.getsize(compressed_file) retorna o tamanho do arquivo no caminho especificado.
    compressed_size = os.path.getsize(compressed_file)
    # compressed_size = 500000 (500 KB)

    # Obtém o tamanho do arquivo original em bytes.
    # os.path.getsize(file_path) retorna o tamanho do arquivo original no caminho especificado.
    original_size = os.path.getsize(file_path)
    # original_size = 1000000 (1 MB)

    # Calcula a taxa de compressão.
    # A taxa de compressão é a razão entre o tamanho original e o tamanho compactado.
    # Quanto maior o valor, maior foi a compressão.
    compression_ratio = original_size / compressed_size
    # compression_ratio = 2.0 (taxa de compressão de 2:1)

    return compressed_file, compression_time, compressed_size, original_size, compression_ratio

def decompress_file(compressed_file, method, output_dir, original_file_name):
    # Define o caminho do arquivo descomprimido.
    # O arquivo descomprimido será salvo em `output_dir` com o nome "decompressed_<original_file_name>".
    decompressed_file = os.path.join(output_dir, f"decompressed_{original_file_name}")

    # Captura o tempo inicial para calcular o tempo de descompressão.
    start_time = time.time()

    # Verifica o método de compressão e realiza a descompressão correspondente.
    if method == "zip":
        # Abre o arquivo ZIP no modo leitura ('r').
        with zipfile.ZipFile(compressed_file, 'r') as zipf:
            # Define o caminho onde os arquivos serão extraídos temporariamente.
            extracted_path = os.path.join(output_dir, "zip_extracted")

            # Extrai todos os arquivos do ZIP para a pasta temporária.
            zipf.extractall(extracted_path)

            # Lista os arquivos extraídos na pasta temporária.
            extracted_files = os.listdir(extracted_path)

            # Verifica se o arquivo original está entre os arquivos extraídos.
            if original_file_name in extracted_files:
                # Move o arquivo extraído para o caminho final (`decompressed_file`).
                shutil.move(os.path.join(extracted_path, original_file_name), decompressed_file)
            else:
                # Se o arquivo original não for encontrado, define `decompressed_file` como None.
                decompressed_file = None

            # Remove a pasta temporária e todo o seu conteúdo.
            shutil.rmtree(extracted_path)

    elif method == "gzip":
        # Abre o arquivo compactado no formato gzip no modo leitura binária ('rb').
        with gzip.open(compressed_file, 'rb') as gz:
            # Abre o arquivo descomprimido no modo escrita binária ('wb').
            with open(decompressed_file, 'wb') as f:
                # Copia o conteúdo do arquivo compactado para o arquivo descomprimido.
                shutil.copyfileobj(gz, f)

    elif method == "bz2":
        # Abre o arquivo compactado no formato bzip2 no modo leitura binária ('rb').
        with bz2.BZ2File(compressed_file, 'rb') as bz:
            # Abre o arquivo descomprimido no modo escrita binária ('wb').
            with open(decompressed_file, 'wb') as f:
                # Copia o conteúdo do arquivo compactado para o arquivo descomprimido.
                shutil.copyfileobj(bz, f)

    elif method == "lzma":
        # Abre o arquivo compactado no formato LZMA no modo leitura binária ('rb').
        with lzma.open(compressed_file, 'rb') as lz:
            # Abre o arquivo descomprimido no modo escrita binária ('wb').
            with open(decompressed_file, 'wb') as f:
                # Copia o conteúdo do arquivo compactado para o arquivo descomprimido.
                shutil.copyfileobj(lz, f)

    # Calcula o tempo total de descompressão.
    decompression_time = time.time() - start_time

    # Retorna o caminho do arquivo descomprimido e o tempo de descompressão.
    return decompressed_file, decompression_time

def generate_comparison_report(file_path, methods=["zip", "gzip", "bz2", "lzma"]):
    # file_path: Caminho completo, relativo ou apenas o nome do arquivo original que será compactado e descompactado.
    # methods: Lista de métodos de compressão a serem testados (padrão: ["zip", "gzip", "bz2", "lzma"]).

    output_dir = os.path.dirname(file_path)
    # os.path.dirname(file_path): Obtém o diretório onde o arquivo original está localizado.
    # Exemplo: Se file_path = "/home/user/documents/arquivo.txt", então output_dir = "/home/user/documents".

    original_file_name = os.path.basename(file_path)
    # os.path.basename(file_path): Obtém apenas o nome do arquivo (sem o diretório).
    # Exemplo: Se file_path = "/home/user/documents/arquivo.txt", então original_file_name = "arquivo.txt".

    results = []
    # Lista vazia para armazenar os resultados de cada método de compressão.

    for method in methods:
        # Itera sobre cada método de compressão na lista `methods`.
        print(f"Processando {method}...")
        # Exibe uma mensagem indicando qual método está sendo processado.

        compressed_file, compression_time, compressed_size, original_size, compression_ratio = compress_file(file_path, method, output_dir)
        # Chama a função `compress_file` para compactar o arquivo usando o método atual.
        # Retorna:
        # - compressed_file: Caminho do arquivo compactado.
        # - compression_time: Tempo de compressão em segundos.
        # - compressed_size: Tamanho do arquivo compactado em bytes.
        # - original_size: Tamanho do arquivo original em bytes.
        # - compression_ratio: Taxa de compressão (original_size / compressed_size).

        decompressed_file, decompression_time = decompress_file(compressed_file, method, output_dir, original_file_name)
        # Chama a função `decompress_file` para descompactar o arquivo compactado.
        # Retorna:
        # - decompressed_file: Caminho do arquivo descompactado.
        # - decompression_time: Tempo de descompressão em segundos.

        results.append({
            "Method": method,
            "Compression Time (s)": compression_time,
            "Decompression Time (s)": decompression_time,
            "Original Size (bytes)": original_size,
            "Compressed Size (bytes)": compressed_size,
            "Compression Ratio": compression_ratio
        })
        # Adiciona os resultados do método atual à lista `results`.

        os.remove(compressed_file)
        # Remove o arquivo compactado após a descompressão para liberar espaço.

        if decompressed_file and os.path.exists(decompressed_file):
            os.remove(decompressed_file)
        # Verifica se o arquivo descompactado existe e o remove.

    print("\nRelatório Comparativo:")
    # Exibe o cabeçalho do relatório.

    print(f"{'Method':<10} {'Compression Time (s)':<20} {'Decompression Time (s)':<25} {'Compression Ratio':<20}")
    # Formata e exibe o cabeçalho da tabela de resultados.
    # - '<10': Alinha o texto à esquerda com 10 caracteres de largura.
    # - '<20': Alinha o texto à esquerda com 20 caracteres de largura.
    # - '<25': Alinha o texto à esquerda com 25 caracteres de largura.

    for result in results:
        # Itera sobre os resultados de cada método de compressão.
        print(f"{result['Method']:<10} {result['Compression Time (s)']:<20.4f} {result['Decompression Time (s)']:<25.4f} {result['Compression Ratio']:<20.4f}")
        # Exibe os resultados formatados em uma tabela.
        # - '<10': Alinha o método à esquerda com 10 caracteres de largura.
        # - '<20.4f': Alinha o tempo de compressão à esquerda com 20 caracteres de largura e 4 casas decimais.
        # - '<25.4f': Alinha o tempo de descompressão à esquerda com 25 caracteres de largura e 4 casas decimais.
        # - '<20.4f': Alinha a taxa de compressão à esquerda com 20 caracteres de largura e 4 casas decimais.

file_path = 'exemplo.txt'  # Substitua pelo arquivo desejado
generate_comparison_report(file_path)