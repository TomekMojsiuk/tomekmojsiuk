const portfolio = () => {
    //Projects
 const invoiceMe = $(".invoice__me").find(".icon");
 const invoiceMeCodePreview = "https://github.com/TomekMojsiuk/invoice-generator";
 const invoiceMeLivePreview = "https://invoice-me.netlify.com/";

 const weatherApp = $(".weather__app").find(".icon");
 const weatherAppCodePreview = "https://github.com/TomekMojsiuk/weather-app";
 const weatherLivePreview = "https://tm-weather.netlify.com/";

 const projectPreview = (projectName, codePreviewUrl, livePrevievUrl) => {
  projectName.each(function(element, index) {
   $(this).on("click", function() {
    if (index === 0) {
     window.open(codePreviewUrl);
    } else {
     window.open(livePrevievUrl);
    }
   });
  });
 };

projectPreview (invoiceMe, invoiceMeCodePreview, invoiceMeLivePreview);
projectPreview (weatherApp, weatherAppCodePreview, weatherLivePreview);

};

export default portfolio;
