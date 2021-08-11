const fetchArticleBySearchTerm = async (searchTerm) =>  {
  let searchTermJSON = JSON.stringify(searchTerm)
  let urlTail = `"where":{"title":{"ilike":${searchTermJSON}}}`
  try{
    let response = await fetch(`http://localhost:3001/api/articles?filter={${urlTail}}`)
    let filteredNews = await response.json()
    return filteredNews
  } catch (error) {
    console.log(error)
  }
};


const fetchArticleByID = async (articleID) => {
  try{
    let response = await fetch(`http://localhost:3001/api/articles/${articleID}`)
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

const fetchArticlesBySection = async (section) => {
  let urlTail = `"where":{"section":"${section}"}`
  try{
    console.log(urlTail)
    let response = await fetch(`http://localhost:3001/api/articles?filter={${urlTail}}`)
    let filteredNews = await response.json()
    console.log(filteredNews)
    return filteredNews
  } catch (error) {
    console.log(error)
  }
};

const fetchArticles = async (filters = null) => {
  try{
    let response = await fetch('http://localhost:3001/api/articles')
    let data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
};

export {
  fetchArticleByID,
  fetchArticles,
  fetchArticlesBySection,
  fetchArticleBySearchTerm
};
