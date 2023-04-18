import NotFound from "../Components/NotFound"

const ErrorPage = () => {
    return (
      <div className="ErrorPage">
        <div style={{ position: 'relative', paddingBottom: 'calc(56.25% + 44px)' }}>
          <iframe
            src='https://gfycat.com/ifr/InfiniteDopeyGoa'
            title='404 Not Found'
            width='100%'
            height='100%'
            style={{ position: 'absolute', top: 0, left: 0 }}
            allowFullScreen
          />
        </div>
        <p>
          <a href='/'>Back to Home</a>
        </p>
        <NotFound />
      </div>
    );
  };
  
  export default ErrorPage;
  