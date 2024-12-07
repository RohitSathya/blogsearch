import React, { useState } from "react";

const blogPosts = [
  { id: 1, title: "Understanding React", category: "Technology", content: "React is a popular JavaScript library..." },
  { id: 2, title: "The Beauty of Nature", category: "Travel", content: "Nature is full of wonders..." },
  { id: 3, title: "Top 10 Programming Tips", category: "Technology", content: "To improve as a programmer..." },
  { id: 4, title: "Exploring the World", category: "Travel", content: "Travel opens your mind..." },
  { id: 5, title: "Healthy Eating Tips", category: "Health", content: "Eating healthy is crucial..." },
];

const BlogSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase()); 
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-200 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8 drop-shadow-md">
          Explore Blogs
        </h1>
        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Start typing to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-2/3 px-4 py-2 text-lg border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 text-lg border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6"
            >
              <h2 className="text-2xl font-semibold text-blue-800">{post.title}</h2>
              <p className="text-sm text-gray-600">{post.category}</p>
              <p className="mt-4 text-gray-700">{post.content.substring(0, 80)}...</p>
            </div>
          ))}
          {filteredPosts.length === 0 && (
            <div className="text-gray-600 text-center col-span-full text-xl">
              No posts found. Try searching for something else.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
