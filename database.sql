CREATE DATABASE api_rest_typescript;

use api_rest_typescript;

CREATE TABLE rooms(
    id int KEY AUTO_INCREMENT,
    name VARCHAR(100)
    description VARCHAR(100)
    videos varchar(100)
)

-- create user 
CREATE USER '<name-user>'@'localhost' IDENTIFIED BY '<your-password>';

-- atribuir todas as permissões
GRANT ALL PRIVILEGES ON * . * TO '<name_user>'@'localhost';
-- all privileges again
FLUSH PRIVILEGES;