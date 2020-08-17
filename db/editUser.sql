UPDATE users SET 
profile_pic = $1

WHERE user_id = $2
and password = $3;