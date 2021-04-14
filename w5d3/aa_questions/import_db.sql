-- PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follows;

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    follower_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (follower_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    subject_question_id INTEGER NOT NULL,
    parent_reply_id INTEGER,
    author_id INTEGER NOT NULL,
    body TEXT NOT NULL,

    FOREIGN KEY (subject_question_id) REFERENCES questions(id),
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (author_id) REFERENCES users(id)
);

    
DROP TABLE IF EXISTS question_likes;

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname, lname)
VALUES
  ('Steven', 'Tran'),
  ('Brandon', 'Fang');

INSERT INTO 
    questions (title, body, author_id)
VALUES 
    ("LRU Cache", "How do you implement an LRU Cashe?", 1),
    ("Flexbox", "What is justify-content?", 2);

INSERT INTO 
    question_follows (question_id, follower_id)
VALUES
    (1, 2),
    (1, 1),
    (2, 2);

INSERT INTO 
    replies(subject_question_id, author_id, body)
VALUES
    (2, 1, "Justify-Content defines how space is distributed along the main axis of a flex container");

INSERT INTO 
    question_likes(user_id, question_id)
VALUES
    (1, 2);