import React from "react";
const commentData = [
  {
    name: "Ashish Ranjan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [],
  },

  {
    name: "Anurag Ranjan",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [
      {
        name: "Ashu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
        replies: [],
      },
      {
        name: "Sunny",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
        replies: [
          {
            name: "Rohan",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
            replies: [
              {
                name: "Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
                replies: [
                  {
                    name: "Syam",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
                    replies: [],
                  },
                ],
              },
              {
                name: "Rohit",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
                replies: [],
              },
            ],
          },
          {
            name: "Ash",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
            replies: [],
          },
        ],
      },
      {
        name: "Rohit",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
        replies: [],
      },
    ],
  },

  {
    name: "Mukesh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [],
  },

  {
    name: "Shambhu Sharan Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [],
  },

  {
    name: "Arti Kumari",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [],
  },

  {
    name: "Bitu Kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, fuga?",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-5 mt-5 bg-gray-100 rounded-md p-2 items-center">
      <i className=" text-3xl fa-solid fa-user"></i>
      <div className="">
        <h2 className="font-medium text-xl">{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, id) => (
    <div key={id}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-8">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
