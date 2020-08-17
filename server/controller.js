const axios = require("axios");

const registerUser = (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    console.log(`hit`, req.body, username, password);

    db
    .createUser([username, password])
        .then(response => {
        res.status(200).send(response);
        console.log(response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};

const login = (req, res, next) => {
    const db = req.app.get("db");
    let { username, password } = req.body;

    db
    .login([username, password])
    .then(response => {
        res.status(200).send(response);
        console.log(`loginresponse`, response);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};

const updateUserInfo = (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;
    let { password, profile_pic } = req.body;

    db.updateUserInfo([profile_pic, username, password]);
};

const getPosts = (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;

    console.log(id);
    db
    .getAllUserPosts(id)
    .then(posts => {
        res.status(200).send(posts);
        console.log(`getAllPosts`, posts);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};

const editPost = (req, res, next) => {
    const db = req.app.get("db");
    let { post_id } = req.params;
    let { content } = req.body;
    console.log(req.params);
    console.log(content, post_id);
    db
    .editPost([content, post_id])
    .then(post => {
        ;
      // console.log(post);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send(err);
    });
};

const deletePost = (req, res, next) => {
    const db = req.app.get("db");
    const { post_id } = req.params;

    db
    .deletePost(post_id)
    .then(posts => {
        res.status(200).send(posts);
        console.log(`deleted`, posts);
    })
    .catch(err => console.log(err));
};

module.exports = {
    registerUser,
    login,
    updateUserInfo,
    getPosts,
    editPost,
    deletePost
};