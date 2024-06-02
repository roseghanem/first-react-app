import htmlContent from '../htmls/verification.html';

const HtmlVerificationContent = () => {
  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default HtmlVerificationContent;