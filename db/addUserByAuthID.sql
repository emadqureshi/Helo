INSERT INTO users
    (username, password)
VALUES
    ($1, $2, $3, $4)
RETURNING *