import React from 'react';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';
import { Link } from 'react-router-dom';
import { selectPostById } from './postsSlice';
import { useSelector } from 'react-redux';

export const PostExcerpt = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p className="post-content">{post.content}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  );
};
