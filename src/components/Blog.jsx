import { useState } from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section id="blog" className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Blog / Insights
      </motion.h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer overflow-hidden hover:shadow-xl transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => setSelectedPost(post)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{post.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-xl font-bold"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>

            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{selectedPost.date}</p>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">{selectedPost.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{selectedPost.content}</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Blog;
