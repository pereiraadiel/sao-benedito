### Configurar Minio S3

#### Após executar o docker-compose.yml

- acessar http://localhost:9000

  - criar um novo bucket e salvar as credenciais de acesso
  - instalar o CLI : https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs-redirect#quickstart
  - executar o comando para permitir que o bucket seja acessado anonimamente (tornar público)

  ```sh
  	# configurar o apelido para conectar ao servidor minio
  	mc alias set um_nome_qualquer http://localhost:9000 ACCESS_KEY ACCESS_SECRET

  	# configurar o bucket para publico
  	mc anonymous policy set download um_nome_qualquer/meu-bucket
  ```
