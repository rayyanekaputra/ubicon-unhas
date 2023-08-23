// https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
export function imgImporter(nama_gambar){
    function importAll(r) {
        let images = {};
        r.keys().forEach((item, index) => {
          images[item.replace("./", "")] = r(item);
        });
        return images;
      }
    const imgImported = importAll(
        require.context("../assets/news_img/", false, /\.(png|jpe?g|svg)$/)
        )  
    return imgImported;
      
}