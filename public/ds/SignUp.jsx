import htmlContent from '../htmls/signup.html';

const HtmlSignUpContent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlSignUpContent;