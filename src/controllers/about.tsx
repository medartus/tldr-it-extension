const About = () => {
  return (
    <div className="text-white mx-auto p-4 flex-1 flex flex-col">
      <div className="flex flex-col items-center text-center">
        <p className="text-3xl font-medium p-4">The Project 🚀</p>
        <p className="text-lg text-justify font-medium mb-4">
          "TDLR; it" is a free open source project that allows you to summarize
          any article or content you browse on the Internet. You can write and
          share with the community a summary of the article you are reading or,
          if there is none, use an artificial intelligence service to create one
          for you!
        </p>
        <p className="text-lg text-justify font-medium mb-4">
          The source code is available on
          <a className="text-indigo-300" href="https://cutt.ly/jIxJbK0">
            {' '}
            Github
          </a>
          , you can contribute, share feature ideas and report bugs.
        </p>
        <p className="text-3xl font-medium p-4">Support Us 👏</p>
        <p className="text-lg text-justify font-medium mb-4">
          This project has no advertising and requires no money. The best
          support you can give is to share it on social media to help us grow
          the community.
        </p>
        <p className="text-lg text-justify font-medium mb-4">
          For example, you can share
          <a className="text-indigo-300" href="">
            {' '}
            this article{' '}
          </a>
          explaining what is "TLDR; it" and how to install it.
        </p>
        <p className="text-3xl font-medium p-4">The Team 👨‍💻</p>
        <p className="text-lg text-justify font-medium mb-4">
          This tool is made with ❤️ by Marc-Etienne Dartus. You can contact me
          via
          <a className="text-indigo-300" href="https://cutt.ly/HIxJW2z">
            {' '}
            Twitter{' '}
          </a>
          or
          <a className="text-indigo-300" href="https://cutt.ly/lIxJYnQ">
            {' '}
            LinkedIn
          </a>
          , don't hesitate to send me a message.
        </p>
      </div>
    </div>
  );
};

export default About;
