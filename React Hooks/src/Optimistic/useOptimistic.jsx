import { useState, useOptimistic } from "react";

export default function OptimisticComments() {
  const [comments, setComments] = useState(["Great post!", "Nice article!"]);

  // Optimistic state
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (currentComments, newComment) => [...currentComments, newComment]
  );

  const addComment = async (newComment) => {
    addOptimisticComment(newComment); // Update UI immediately
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
    setComments((prev) => [...prev, newComment]); // Update real state
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {optimisticComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <button onClick={() => addComment("Awesome!")}>Add Comment</button>
    </div>
  );
}
