module.exports = function (book) {
    const adCode = `
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5586080722013446"
    crossorigin="anonymous"></script>
    <!-- algonotes horizontal -->
    <ins class="adsbygoogle"
         style="display:block"
         data-ad-client="ca-pub-5586080722013446"
         data-ad-slot="9729951093"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>
         (adsbygoogle = window.adsbygoogle || []).push({});
    </script>
    `;
  
    book.on('page.before', async (page) => {
      page.content = adCode + page.content; // Add ad code before content
    });
  
    book.on('page.after', async (page) => {
      // Use the same ad code from the higher scope
      page.content += adCode; // Add ad code after content
    });
  };
  