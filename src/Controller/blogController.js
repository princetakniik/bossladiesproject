const { Blogs } = require("../Model/blogModel");

const insertBlog = async (req, res) => {
  const { ...rest } = req.body;
  try {
    const insertData = await Blogs.create({
      userBlog: rest.userBlog,
      userBlogImage: rest.userBlogImage,
      email: rest.email,
    });
    res
      .status(200)
      .json({ msg: `insert blog data successfully`, data: insertData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `blog not insert data`, err });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const blogsData = await Blogs.find({ isDelete: false });
    res.status(200).json({ msg: `all blogs data found ..`, data: blogsData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `all blogs data not found ..`, err });
  }
};

const getBlogById = async (req, res) => {
  const { _id } = req.query;
  try {
    const blogData = await Blogs.findOne({ _id: _id, isDelete: false });
    res.status(200).json({ msg: `blog data found by id `, data: blogData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `blog data not found by id ..`, err });
  }
};

const updateBlogById = async (req, res) => {
  const { _id } = req.query;
  const { ...rest } = req.body;
  try {
    const updateData = await Blogs.updateOne(
      { _id: _id, isDelete: false },
      {
        $set: {
          userBlog: rest.userBlog,
          userBlogImage: rest.userBlogImage,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `blog data update successfully..`, data: updateData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `blog data not update by id `, err });
  }
};

const deleteBlogData = async (req, res) => {
  const { _id } = req.query;
  try {
    const deleteData = await Blogs.updateOne(
      { _id: _id },
      {
        $set: {
          isDelete: true,
        },
      }
    );
    res
      .status(200)
      .json({ msg: `delete blog data successfully..`, data: deleteData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: ` not delete blog data successfully...`, err });
  }
};

module.exports = {
  insertBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogData,
};
