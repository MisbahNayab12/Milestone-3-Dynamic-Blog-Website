import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { CardContent } from "../components/ui/card";

interface Comment {
  id: string;
  author: string;
  text: string;
}

interface CommentSectionProps {
  postId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);

  const handleAddOrEditComment = () => {
    if (!newComment.trim() || !authorName.trim()) return;

    if (editingCommentId) {
      setComments((prev) =>
        prev.map((comment) =>
          comment.id === editingCommentId
            ? { ...comment, text: newComment, author: authorName }
            : comment
        )
      );
    } else {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
      };
      setComments((prev) => [...prev, newCommentObj]);
    }

    setNewComment("");
    setAuthorName("");
    setEditingCommentId(null);
  };

  const handleEditComment = (commentId: string) => {
    const commentToEdit = comments.find((comment) => comment.id === commentId);
    if (commentToEdit) {
      setNewComment(commentToEdit.text);
      setAuthorName(commentToEdit.author);
      setEditingCommentId(commentId);
    }
  };

  const renderComments = () => {
    if (comments.length === 0) return <p>No comment yet</p>;

    return comments.map((comment) => (
      <Card key={comment.id}>
        <CardContent className="p-4">
          <div className="font-semibold">{comment.author}</div>
          <p>{comment.text}</p>
          <Button
            onClick={() => handleEditComment(comment.id)}
            className="mt-2 bg-amber-700 hover:bg-amber-600"
          >
            Edit
          </Button>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className="mt-12 font-sans">
      <h2 className="text-2xl font-semibold">Comments</h2>
      <div className="mt-4 space-y-4">{renderComments()}</div>
      <div className="mt-6">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Enter your name"
          className="w-full mb-2"
        />
        <Input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full mb-2"
        />
        <Button
          onClick={handleAddOrEditComment}
          className="mt-4 bg-amber-700 hover:bg-amber-600 mb-10"
        >
          {editingCommentId ? "Save" : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
