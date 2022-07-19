const express = require("express");
const router = express.Router();
const { User, Post, Hashtag } = require("../models");
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ["nick"] },
        { model: Hashtag, attributes: ["title"] },
      ],
    });
    return res.status(200).json(posts);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
});
router.post("/write", async (req, res) => {
  const { title, content, tags } = req.body;
  console.log(title, content, tags);
  try {
    const post = await Post.create({ title, content, UserId: req.user.id });
    if (tags) {
      const Results = await Promise.all(
        tags.map((tag) =>
          Hashtag.findOrCreate({ where: { title: tag.toLowerCase() } })
        )
      );
      await post.addHashtags(Results.map((result) => result[0]));
    }
    return res.status(200).json({ nick: req.user.nick, id: post.id });
  } catch (e) {
    return res.status(400).json(e);
  }
});
router.get("/write/:postId", async (req, res) => {
  const { postId } = req.params;
  console.log(postId);
  try {
    const post = await Post.findOne({
      where: { id: postId },
      include: [
        { model: User, attributes: ["nick"] },
        { model: Hashtag, attributes: ["title"] },
      ],
    });
    return res.status(200).json(post);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
});
router.delete("/remove/:postId", async (req, res) => {
  const { postId } = req.params;

  try {
    await Post.destroy({ where: { id: postId } });
    return res.send("delete_sucess");
  } catch (e) {
    console.error(e);
  }
});
module.exports = router;
