const express = require("express");
const router = express.Router();
const { User, Post, Hashtag } = require("../models");
const contentLengthLimiter = (content) => {
  return content.length < 200 ? content : content.slice(0, 150);
};
router.get("/", async (req, res) => {
  const { page, nick, tag } = req.query;
  // console.log(page, nick, tag);
  const limit = 3;
  try {
    const posts = await Post.findAll({
      include: [
        { model: User, attributes: ["nick"] },
        { model: Hashtag, attributes: ["title"] },
<<<<<<< HEAD
      ],
      order: [["createdAt", "desc"]],
      limit,
      offset: (parseInt(page, 10) - 1) * limit,
    });
    const postCount = await Post.findAll({
      include: [
        { model: User, attributes: ["nick"] },
        { model: Hashtag, attributes: ["title"] },
=======
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
      ],
    });
    const lastPage = Math.ceil(postCount.length / limit);
    res.set("last-page", lastPage);

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
router.patch("/write/:postId", async (req, res) => {
  const { postId } = req.params;
  const { title, content, tags } = req.body;
  // console.log(title, content, tags, postId);
  try {
    await Post.update(
      { title, content: contentLengthLimiter(content) },
      { where: { id: postId } }
    );
    // if (tags) {
    //   const Results = await Promise.all(
    //     tags.map((tag) =>
    //       Hashtag.update({ where: { title: tag.toLowerCase() } })
    //     )
    //   );
    //   await post.updateHashtags(Results.map((result) => result[0]));
    //   //
    // }
    return res.status(200).json({ nick: req.user.nick, id: postId });
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
});
router.get("/read/:postId", async (req, res) => {
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
<<<<<<< HEAD
  try {
    await Post.destroy({ where: { id: postId } });
    return res.send("ok");
=======

  try {
    await Post.destroy({ where: { id: postId } });
    return res.send("delete_sucess");
>>>>>>> 419d780b00efd31f4dac61efe38bb1f66e00e6e0
  } catch (e) {
    console.error(e);
  }
});
module.exports = router;
