const Newslist = require("../model/newsSchema");

exports.createMultipleNewsItems = async (req, res) => {
  const entries = req.body; // Assuming req.body is an array of news items

  try {
    if (!Array.isArray(entries)) {
      return res
        .status(400)
        .json({ error: "Invalid data format. Expected an array." });
    }

    const createdNewsItems = [];

    for (let entry of entries) {
      const { title, author, content, category, image_url } = entry;

      const newsItem = new Newslist({
        title,
        author,
        content,
        category,
        image_url,
        create_time: new Date(),
      });

      const savedNewsItem = await newsItem.save();

      createdNewsItems.push(savedNewsItem);
    }

    res.status(201).json(createdNewsItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllNewsItems = async (req, res) => {
  try {
    const newsItems = await Newslist.find();
    res.status(200).json(newsItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getNewsItemByCategory = async (req, res) => {
  try {
    const category = req.params.category;

    const newsItems = await Newslist.find({ category: category });

    if (newsItems.length === 0) {
      return res
        .status(404)
        .json({ error: "No news items found in this category" });
    }

    res.status(200).json(newsItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
