import React from "react";
import Comments from "./Comments";

const commentData = [
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [
          {
            name: "Devesh Upadhyay",
            Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
            reply: [],
          },
        ],
      },
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [],
      },
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [
          {
            name: "Devesh Upadhyay",
            Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
            reply: [],
          },
        ],
      },
    ],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [],
      },
    ],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [],
      },
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [
          {
            name: "Devesh Upadhyay",
            Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
            reply: [
              {
                name: "Devesh Upadhyay",
                Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
                reply: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [
          {
            name: "Devesh Upadhyay",
            Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
            reply: [
              {
                name: "Devesh Upadhyay",
                Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
                reply: [
                  {
                    name: "Devesh Upadhyay",
                    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
                    reply: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Devesh Upadhyay",
    Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
    reply: [
      {
        name: "Devesh Upadhyay",
        Text: "Dear Construction Professional, Greetings from Indian Concrete Institute (ICI). ICI is one of the leading professional bodies in India, catering to the professional needs of individuals and organisations involved in Concrete ",
        reply: [],
      },
    ],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comments data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.reply} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl"> Comments: </h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
