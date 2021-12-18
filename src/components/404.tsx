const NotSupported = () => {
  return (
    <div className="text-white mx-auto p-4 flex-1 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center text-center p-4">
        <div className="w-full">
          <div className="text-5xl font-medium p-4">404 ☠️</div>
          <div className="text-xl font-medium mb-4">
            Sherlock something is wrong here ! 🕵️
          </div>
          <div className="text-lg mb-8">
            This website might not be supported or there was an issue from our
            side.
          </div>
        </div>
        <p
          onClick={() => window.close()}
          className="w-max text-lg border border-white rounded p-4"
        >
          Close the window
        </p>
      </div>
    </div>
  );
};

export default NotSupported;
