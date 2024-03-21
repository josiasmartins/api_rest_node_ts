-- Dentro dos métodos findById, findAll, create, update e delete

-- Buscar todos os usuários
SELECT * FROM users;

-- Buscar um usuário por ID
SELECT * FROM users WHERE id = ?;

-- Inserir um novo usuário
INSERT INTO users (name, email) VALUES (?, ?);

-- Atualizar um usuário existente
UPDATE users SET name = ?, email = ? WHERE id = ?;

-- Deletar um usuário por ID
DELETE FROM users WHERE id = ?;
