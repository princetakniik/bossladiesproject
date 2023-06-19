const {
  insertBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogData,
} = require("../Controller/blogController");

module.exports = (app) => {
  app.post("/insertBlog", (req, res) => insertBlog(req, res));
  app.get("/getAllBlogs", (req, res) => getAllBlogs(req, res));
  app.get("/getBlogById", (req, res) => getBlogById(req, res));
  app.put("/updateBlogById", (req, res) => updateBlogById(req, res));
  app.delete("/deleteBlogData", (req, res) => deleteBlogData(req, res));
};
